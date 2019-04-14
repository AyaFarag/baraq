<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Models\School_user;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\DB;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $school=Auth::guard('school')->user();
      return view('school.schoolDashboard',compact('school'));
    }
    public function schoolLogin(){
        return view('auth.school.login');
    }
    public function login(Request $request)
    {
//        dd($request->all());
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if (Auth::guard('school')->attempt(['email' => $request->email, 'password' => $request->password])){
            return redirect(url('school/dashboard'));
        }
        return redirect()->back()->withErrors(['error' => 'Email Or Password Incorrect']);
    }
    public function logout()
    {
        Auth::guard('school')->logout();
        return redirect('school/login');
    }
    public function studentIndex(){
        $student=School_user::where('school_id',\auth()->guard('school')->id())->get();
        return view('school.student.index',compact('student'));
    }
    public function addStudent(){
        return view('school.student.create');
    }
    public function storeStudent(Request $request){
        DB::transaction(function () use($request) {
        $data=$request->except('_token','password','password_confirmation');
        if ($request->password && $request->password !=null){
            $password=bcrypt($request->password);
            $data['password']=$password;
        }
        $user= new User();
        $data['role']=$user->getStudentValue();
        $data['creator']=\auth()->guard('school')->user()->name;
        $student=User::create($data);
        if($student){
            DB::table('school_user')->insert([
                'student_id'=>$student->id,
                'school_id'=>\auth()->guard('school')->id(),
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now(),
            ]);
        }
    });
        return redirect()->back()->with('status','تم الإضافه بنجاح');
    }
    public function editStudent($id){
        $student=User::find($id);
        return view('school.student.edit',compact('student'));
    }
    public function updateStudent(Request $request,$id){
        $student=User::find($id);
        $data=$request->except('_token','password','password_confirmation');
        if ($request->password && $request->password !=null){
            $password=bcrypt($request->password);
            $data['password']=$password;
        }
        $student->update($data);
        return redirect()->back()->with('status','تم التعديل بنجاح');
    }
    public function deleteStudent($id){
        DB::table('school_user')->where('student_id',$id)->delete();
        User::destroy($id);
        return redirect()->back()->with('status','تم الحذف بنجاح');
    }
}
