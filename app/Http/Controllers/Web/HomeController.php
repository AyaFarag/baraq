<?php

namespace App\Http\Controllers\Web;


use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as Level;
use App\Models\LessonStructure as Content;
use Session;



class HomeController extends Controller
{

    public function index(){

        $level = Level::where('type', 'level')->get();

        return view('bareq_design.index', compact('level'));
    }
}
