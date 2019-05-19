<?php

namespace App\Http\Controllers\Web;

use App\Models\PlacementTest;
use App\Models\StudentHistory;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as Unit;



class UnitController extends Controller
{

    public function index($level)
    {
      
        $Unit = Unit::where(['parent_id' =>$level, 'type' => 'unit'] )->orderBy('sort', 'asc')->get();
        $role=new User();
        if(auth()->check() && auth()->user()->role==$role->getStudentValue()) {
            $assginLevel = StudentHistory::where(['user_id' => auth()->id(), 'level_id' => $level])->first();
            $previousLevel = PlacementTest::where('user_id', auth()->id())->get()->pluck('level_id')->toArray();
            if($assginLevel || in_array($level,$previousLevel)){
                return view('bareq_design.unit', compact('Unit'));
            }else{
                return redirect()->back()->withErrors('يجب الانتهاء من المستوى السابق اولا');
            }
            }else{
            return view('bareq_design.unit', compact('Unit'));
        }
        }
}