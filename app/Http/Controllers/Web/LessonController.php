<?php

namespace App\Http\Controllers\Web;


use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as Lesson;
use App\Models\LessonStructure as Content;
use DB;




class LessonController extends Controller
{

    public function index($unit)
    {
        $Lesson = Lesson::where(['parent_id' =>$unit, 'type'=> 'lesson'])->orderBy('sort', 'asc')->get();
        
        $lesson = DB::table('lesson_structures')
                    ->join('structures','structures.id', '=','lesson_structures.lesson_id')
                    ->first(); 
                    
        $unit = Lesson::where('id', $lesson->parent_id)->first()->value('color1');

        return view('bareq_design.lesson', compact('Lesson', 'unit'));
    }
    

    public function lesson_content(Request $request, Lesson $Lesson)
    {
        
        session()->put('currentAccessLessonIdByStudent', $Lesson->id);

        $lessonId = $request->segment(2);
        $contentRequired = Content::with('file')->whereIn('type', Content::DATA_REQUIRED)->get();
        $contentNotRequired = Content::with('file')->whereNotIn('type', Content::DATA_REQUIRED)->get();
       
        $lesson = DB::table('lesson_structures')
                    ->join('structures','structures.id', '=','lesson_structures.lesson_id')
                    ->first(); 
                    
        $unit = Lesson::where('id', $lesson->parent_id)->first()->value('color1');            

        return view('bareq_design.innerLesson', compact('Lesson', 'contentRequired', 'contentNotRequired','lessonId','unit'));

    }

}