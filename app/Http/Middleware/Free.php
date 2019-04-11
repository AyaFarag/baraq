<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Structure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
class Free
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
        
        
        if (!Auth::check()) {
            
            $Structure = resolve('Structure');
            
            $Structure=Structure::find($request->segment(2));

            if( $Structure -> free == $Structure->getFreeValue()){  
               
                return $next($request); 
            }
            elseif( $Structure -> free == $Structure->getPaidValue())
            {
                return back();
            }

        }
        else
        {
            return $next($request);
        }

    }
}
