<?php

namespace App\Http\Controllers\Web;


use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as Lesson;
use App\Models\LessonStructure as Content;




class LessonController extends Controller
{

    public function index($unit)
    {
        $Lesson = Lesson::where('parent_id', $unit)->orderBy('sort', 'asc')->get();

        return view('bareq_design.lesson', compact('Lesson', 'unit'));
    }
    

    public function lesson_content(Request $request, Lesson $Lesson)
    {
        
        session()->put('currentAccessLessonIdByStudent', $Lesson->id);

        $lessonId = $request->segment(2);
        $content = Content::with('file')->get();

        return view('bareq_design.innerLesson', compact('Lesson', 'content', 'lessonId'));
    }

}