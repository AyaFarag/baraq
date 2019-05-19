<?php

namespace App\Http\Controllers\Web;

use App\Models\Structure;
use App\Models\StudentHistory;
use App\Models\StudentProgress;
use App\Models\UnitProgress;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    public function student_profile($student_id=null){
        $role=new User();
        if($student_id){
            $user=User::find($student_id);
            if($user && $user!=null){
            if($user->role!= $role->getStudentValue()){
                return back()->withErrors('هذا الرقم ليس بطالب');
            }else{
            $student_id=$student_id;
            }
            }else{
                return redirect()->back()->withErrors('لا يوجد طالب بهذا الرقم');
            }
            if(auth()->user()->role==$role->getParentValue()){
                $parent=User::find(auth()->id());
                $parentStudent=DB::table('user_parent')->where('parent_id',$parent->id)->pluck('student_id')->toArray();
               if(count($parentStudent)==0 || !in_array($student_id,$parentStudent)){
                   return back()->withErrors('لا يوجد لديك صلاحيات لهذا الطالب');
               }
            }

        }else{
            if(auth()->check() && auth()->user()->role==$role->getStudentValue()){
            $student_id=auth()->id();
            }else{
                return back();
            }
        }

        $studentLevel=StudentHistory::where('user_id',$student_id)->orderBy('created_at','desc')->first();
        $studentUnit=UnitProgress::where(['user_id'=>$student_id,'status'=>0])->orderBy('created_at','desc')->first();
        $unitLesson=Structure::where(['type'=>'lesson','parent_id'=>$studentUnit->unit_id])->get();
//        dd($unitLesson);
        $studentLesson=StudentProgress::where(['user_id'=>$student_id,'status'=>1])->whereHas('lesson',function ($q)use ($studentUnit){
            $q->where('parent_id',$studentUnit->id);
        })->get();
        $currentLesson=StudentProgress::where(['user_id'=>$student_id,'status'=>0])->first();
        return view('Asign.student_account',compact('studentLevel','studentUnit','studentLesson','unitLesson','currentLesson'));
    }

}