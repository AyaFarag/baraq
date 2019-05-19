<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

class PublicUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $UserObject = new User();
        $roles=[$UserObject->getStudentValue(),$UserObject->getAdminValue(),$UserObject->getParentValue()];

        if(in_array(auth()->user()->role,$roles)){
        return $next($request);
        }else{
            return back();
        }
    }
}
