<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as Unit;



class UnitController extends Controller
{

    public function index($level)
    {
      
        $Unit = Unit::where(['parent_id' =>$level, 'type' => 'unit'] )->orderBy('sort', 'asc')->get();
        
        return view('bareq_design.unit' , compact('Unit' ));
    }
}