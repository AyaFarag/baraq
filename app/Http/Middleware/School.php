<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class School
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$guard=null)
    {
        if (!Auth::guard('school')->check()){
            return redirect()->back()->withErrors('غير مسموح لك الدخول إلى هنا ');
        }
        if ($guard == "school" && Auth::guard($guard)->check()) {
            return redirect()->back()->withErrors('غير مسموح لك الدخول إلى هنا ');
        }
        return $next($request);
    }
}
