<?php

namespace App\Http\Controllers\Admin;


use App\User;
use App\Models\LessonStructure as Content;
use App\Models\Structure as Lesson;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Session;



class LessonController extends Controller
{

    public function lesson_content(Request $request, Lesson $lesson){

        $lessonId = $request->segment(3);
        $content = Content::where( 'lesson_id',$lesson->id )->get();

        return view('bark_admin.lesson_content' , compact('content', 'key', 'lessonId') );
    }


        /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LessonStructure  $lessonStructure
     * @return \Illuminate\Http\Response
     */
    public function destroy(Content $content)
    {
       $content->delete();
       
       Session::flash('status', 'تم الحذف  ');
       return back();

    }
}