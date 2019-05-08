<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $UserObject = resolve('User');

        if (auth()->user()->role == $UserObject->getAdminValue()) {
            return redirect()->route('adminPanel');

        } elseif (auth()->user()->role == $UserObject->getDataEntryValue()) {

            return redirect('/');
            
        } elseif (auth()->user()->role == $UserObject->getStudentValue()) {

            // return view('Asign.student_account');
            return redirect('/');

        } elseif (auth()->user()->role == $UserObject->getParentValue()) {

            // return view('Asign.parent_account');
            return redirect('/');
        } else {

            // return $next($request);
           return back();
            // return back();
        }

    }
    
}
