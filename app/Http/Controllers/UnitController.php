<?php

namespace App\Http\Controllers;

use App\Models\Structure as Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $Unit = Unit::where('type', 'unit')->get();
        // return view('Unit' , compact('Unit'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($level)
    {
      
        $Unit = Unit::where('parent_id' ,$level )->get();
        
        return view('units.Unit' , compact('Unit' ));
    }


    public function display(Request $request ,$level_id){

        $level = $request->segment(3);

        $levelId = Unit::where('type', 'level')->first();

        $unit = Unit::where(['type'=> 'unit','parent_id'=>$level_id])->orderBy('sort', 'asc')->get();

        return view('bark_admin.all_units' , compact('unit', 'level', 'levelId', 'level_id'));
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
     * @param  \App\Unit  $Unit
     * @return \Illuminate\Http\Response
     */
    public function show(Unit $Unit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Unit  $Unit
     * @return \Illuminate\Http\Response
     */
    public function edit(Unit $Unit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Unit  $Unit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Unit $Unit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Unit  $Unit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Unit $Unit)
    {
        //
    }
}
