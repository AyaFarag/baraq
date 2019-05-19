<?php

namespace App\Http\Controllers;

use App\Models\StudentProgress;
use Illuminate\Http\Request;

class StudentProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function assignLesson($lesson_id){
        $data['user_id']=auth()->id();
        $data['lesson_id']=$lesson_id;
        $data['status']=0;
        StudentProgress::create($data);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StudentProgress  $studentProgress
     * @return \Illuminate\Http\Response
     */
    public function show(StudentProgress $studentProgress)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\StudentProgress  $studentProgress
     * @return \Illuminate\Http\Response
     */
    public function edit(StudentProgress $studentProgress)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\StudentProgress  $studentProgress
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StudentProgress $studentProgress)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\StudentProgress  $studentProgress
     * @return \Illuminate\Http\Response
     */
    public function destroy(StudentProgress $studentProgress)
    {
        //
    }
}
