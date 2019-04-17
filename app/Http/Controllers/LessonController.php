<?php

namespace App\Http\Controllers;

use App\Models\Structure as Lesson;
use App\Models\LessonStructure as Content;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $Lesson = Lesson::where('type', 'lesson')->get();
        // return view('Lesson' , compact('Lesson'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($unit)
    {
        $Lesson = Lesson::where('parent_id', $unit)->get();

        return view('lesson.Lesson', compact('Lesson', 'unit'));
    }

    public function display(Request $request, $unit){

        $unit_id = $request->segment(3);

        $lesson = Lesson::where(['type'=> 'lesson','parent_id'=>$unit])->orderBy('sort', 'asc')->get();

        return view('bark_admin.all_lessons' , compact('lesson','unit_id','unit'));
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Lesson $Lesson
     * @return \Illuminate\Http\Response
     */
    public function show(Lesson $Lesson)
    {
        
        session()->put('currentAccessLessonIdByStudent', $Lesson->id);

        $content = Content::with('file')->get();

        return view('lesson.LessonStructure', compact('Lesson', 'content'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Lesson $Lesson
     * @return \Illuminate\Http\Response
     */
    public function edit(Lesson $Lesson)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Lesson $Lesson
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Lesson $Lesson)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Lesson $Lesson
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lesson $Lesson)
    {
        //
    }
}
