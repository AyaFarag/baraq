<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use App\User as User;
use Illuminate\Http\Request;
use App\Http\Requests\loginAndAsignParentRequest;
use App\Mail\ParentInvitation;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Carbon\Carbon;
use Session;

class ParentController extends Controller
{
    use AuthenticatesUsers;

    public $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct(User $user)
    {
        $this ->user = $user;
    }

    public function asignChildForm(){

        return view('Asign.asign_child');
    }
    
    
    public function asignChildToParent(Request $request){
       
        DB::transaction(function() use ( $request)
        {
            $validator = Validator::make($request->all(), [
                'email' => 'required|unique:users,email|max:255',
            
            ]);
            if ($validator->fails()) {
                return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
            }

            $user = new User();
            $user->fill($request->all());
            $user->password = bcrypt($request->password);

            $user->save();


            $data = [];
            $data['student_id'] = $user ->id;
            $data['parent_id'] = auth()->user()->id;
                
            $asign_child = DB::table('user_parent')->insert($data);
            return redirect(url('parentHome'));
        });
    }
           
    public function parentHome(){

        $parent_students_id = DB::table('user_parent')
                              ->where('parent_id', auth()->user()->id)->pluck('student_id'); 

        $student_history =    DB::table('student_histories')
                              ->join('user_parent', 'student_histories.user_id', '=', 'user_parent.student_id')
                              ->join('structures', 'student_histories.level_id', '=', 'structures.id')
                              ->join('users', 'student_histories.user_id', '=', 'users.id')
                              ->get(); 
        
        // dd($student_history);
     

        return view('Asign.parent_account', compact('student_history'));
    }

    public function student_history(User $user){

        return view('Asign.student_history', compact('id'));
    }


    
    public function asignChildEmailForm(){

        return view('Asign.child_email');
    }

    public function asignChildEmail(Request $request){
        $child = $request->all();
        $child_object = User::where('email' , $child['email'] )->first();
        
        $data = [];
        $data['student_id'] = $child_object->id;
        $data['parent_id'] = auth()->user()->id;
        $data['created_at'] = now();
        $data['updated_at'] = now();
        $asign_child = DB::table('user_parent')->insert($data);
       
        Session::flash('status', 'تمت الإضافة بنجاح');
        return view('Asign.parent_account');


    }

    public function asignParentForm(){

        $user = auth()->user()->id;
        return view('Asign.asign_parent', compact('user'));
    }
    
    
    public function sendParentInvitation(Request $request, User $user)
    {
        $parentEmail = "ayasaid94.as@gmail.com";
        $email = $request->email;

        
       
        Mail::to($parentEmail)->send(new ParentInvitation($user,$email));

        return back();
    }

    public function parentApprove(Request $request , $childId , $email){

        $childId = $request->segment(3);
        $email = $request->segment(4);
        
        $emailExist = User::where('email', '=', $email)->exists();
        
        if($emailExist ){
            
            return view('Asign.login', compact('email', 'childId'));
            
        }else {
            
            
            return view('Asign.register', compact('email', 'childId'));
        }


    }

    public function loginAndAsignParent(Request $request, $childId, $email){
        
       
            $childId = $request->segment(4);
            $email = $request->segment(5);
            $password=$request->password;
           
          
            if(Auth::attempt(['email' => $email, 'password' => $password])){

                $parent_id = DB::table('user_parent')
                ->select('parent_id')
                ->where('student_id',$childId)
                ->where('parent_id',auth()->user()->id)
                ->first();
              
                if($parent_id==null)
                    {
                    
                        $data = [];
                        $data['parent_id'] = auth()->user()->id;
                        $data['student_id'] = $childId;
                        $data['updated_at'] = Carbon::now();
                        $data['created_at'] = Carbon::now();
                        $asign_child = DB::table('user_parent')->insert($data);
                    
                    
                        return redirect(url('parentHome'));  
                    
                    }else{
               
                        Session::flash('message', "you have been asigned before");
                        return back();
                    } 
            }
   
    }

    public function registerAndAsignParent(Request $request , $childId, $email){

        DB::transaction(function() use ( $request){
            
            $childId = $request->segment(4);
            
            $parent = User::create($request->all());
            
            $parent->password = bcrypt($request->password);
            $parent->save();
            
            $data = [];
            $data['parent_id'] = auth()->user()->id;
            $data['student_id'] = $childId;
            $data['updated_at'] = Carbon::now();
            $data['created_at'] = Carbon::now();
            $asign_child = DB::table('user_parent')->insert($data);
            
        });
        return view('Asign.parent_account');
    }
    
}