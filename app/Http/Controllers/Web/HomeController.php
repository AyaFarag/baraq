<?php

namespace App\Http\Controllers\Web;


use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as Level;
use App\Models\LessonStructure as Content;
use App\Models\LevelPlacementTest as LevelPlacementTest;
use Session;



class HomeController extends Controller
{

    public function index(){

        $level = Level::where('type', 'level')->orderBy('sort', 'asc')->get();
        
        $placement = LevelPlacementTest::first();

        $lesson = new Level();

        
        $freeLessons = Level::where(['type'=>'lesson', 'free'=> $lesson->getFreeValue()])->get();


        return view('bareq_design.index', compact('level','placement','freeLessons'));
    }
}
