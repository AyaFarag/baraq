<?php

namespace App\Http\Middleware;

use Closure;

class Student
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next  )
    {
        if (!Auth::check()) {

            return redirect('login');

        }

        $user = Auth::user();

        if($user->hasRole(3) ){


        }
             return $next($request);

         foreach($roles as $role) {
       
                // Check if user has the role This check will depend on how your roles are set up
                if($user->hasRole($role))

            return $next($request);
            }

    return redirect('login');
    }
}
