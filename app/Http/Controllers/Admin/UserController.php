<?php

namespace App\Http\Controllers\Admin;

use App\Notifications\NewUserRegisterd;
use App\User;
use App\Models\Structure as Structure;
use App\Models\File as File;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddDataEntryRequest;
use App\Http\Requests\UpdateDataEntryRequest;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Carbon\Carbon;
use Auth;
use Hash;
use Session;

class UserController extends Controller
{
    use AuthenticatesUsers;
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        
        $user = User::where('role' , 2 )->orWhere('role', 3)->get();
        return view('bark_admin.user.all_user', compact('user'));
        
    }

    public function search_admin(Request $request){

        
        $role = $request->role;
        $user = User::where('role', $role)->paginate(10);

        return view('bark_admin.admin.all_user', compact('user'));  
    }

    public function search_users(Request $request){

        
        $role = $request->role;
        $user = User::where('role', $role)->paginate(10);

        // return response()->json($user);

        return view('bark_admin.user.all_user', compact('user'));  
    }

    public function loginUser(Request $request){

        $email = $request->email;
        $password = $request->password;

        if(Auth::attempt(['email' => $email, 'password' => $password])){
            
            $id = auth()->user()->id;
            $user = auth()->user();
            $user->last_login = Carbon::now();
            $user->save();

            return redirect('/home');
        }
        else{
            return back();
        }
    }

    public function adminPanel(){

        $user = User::get();
        $level = Structure::where('type', 'level')->get();
        $unit = Structure::where('type', 'unit')->get();
        $lesson = Structure::where('type', 'lesson')->get();
        $file = File::get();

        return view('bark_admin.index', compact('user', 'level', 'unit', 'lesson', 'file'));

    }

    public function addDataEntry(){

        
        return view('bark_admin.admin.add_user');
    }
    
    public function getDataEntry(){

        $user = User::where('role' , 0 )->orWhere('role', 1)->get();
        return view('bark_admin.admin.all_user', compact('user'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(User $user)
    {
        return view('bark_admin.user.add_user');

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $UserObject = resolve('User');
        $admin_name = auth()->user()->name;
        $user =    User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'role' => $request['role'],
            'creator' => auth()->user()->name,
            ]);
           

        $user->notify(new NewUserRegisterd($user));

        Session::flash('status', 'تمت الاضافه بنجاح');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function show(User $editUser)
    {
        $editUser = User::get();

        return view('Admin.Users', compact('editUser'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function edit(User $editUser)
    {
 
        $user = User::get();
        
        return view("bark_admin.edit_user" , compact('user', 'editUser'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $editUser)
    {
        
        $newUpdatedDataForUser=$request->except('_token');
        if($request->password != null ){
            $newUpdatedDataForUser['password']=  bcrypt($request->password);
            
        }
        else{
            $newUpdatedDataForUser['password'] =  $editUser->password;
           
        }
      
        $editUser->update($newUpdatedDataForUser);

        Session::flash('status', 'تم التعديل بنجاح');
        return back()-> with('user updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $User
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $editUser)
    {   
        $editUser->delete();

        Session::flash('status', 'تم الحذف ');
        return back();
    }

}
