<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Support\Facades\Auth;
use App\User;

class role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role = null)
    {

        if (!Auth::check()) {

            return redirect('login');

        }
        $UserObject = resolve('User');

        if (auth()->user()->role == $UserObject->getAdminValue() && ($role == $UserObject->getAdminValue()) || $role==$UserObject->getDataEntryValue()) {
           
            return $next($request);

        } elseif (auth()->user()->role == $UserObject->getDataEntryValue() && $role == $UserObject->getDataEntryValue()) {

            return $next($request);

        } elseif (auth()->user()->role == $UserObject->getStudentValue() && $role == $UserObject->getStudentValue()) {

            return $next($request);
        
        }elseif (auth()->user()->role == $UserObject->getParentValue() && $role == $UserObject->getParentValue()) {

            return $next($request);
        }

    
        else{

            return back();
            
        }

    }
}
