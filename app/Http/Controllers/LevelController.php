<?php

namespace App\Http\Controllers;

use App\Models\Structure as Level;
use Illuminate\Http\Request;

class LevelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $level = Level::where('type', 'level')->get();
        
        return view('level.Level', compact('level'));
    
    }

    public function display()
    {
        $level = Level::where('type', 'level')->get();
        // $unit = Level::where('parent_id' , $Level->id ) -> first();

        return view('level.allLevels', compact('level', 'unit'));
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
     * @param  \App\Level  $Level
     * @return \Illuminate\Http\Response
     */
    public function show(Level $Level)
    {
        return view( 'units.Unit' , compact('level'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Level  $Level
     * @return \Illuminate\Http\Response
     */
    public function edit(Level $Level)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Level  $Level
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Level $Level)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Level  $Level
     * @return \Illuminate\Http\Response
     */
    public function destroy(Level $Level)
    {
        //
    }
}
