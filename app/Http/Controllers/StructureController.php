<?php

namespace App\Http\Controllers;

use App\Models\Structure as Structure;
use Illuminate\Http\Request;
use App\Http\Requests\StructureRequest;
use App\Models\LevelPlacementTest as LevelPlacementTest;
use Session;
use DB;
use Zip;


class StructureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
     

        $structure = Structure::where('type', 'level')->orderBy('sort', 'asc') ->get();
        $begineer_level = Structure::where('type', 'beginnerLevel')->first();
        
        return view('bark_admin.all_level' , compact('structure','begineer_level'));
    }

    public function back(){

        return redirect()->route('structure.index');
    }

    public function back_units(Request $request, $id){

        $id = $request->segment(3);
        // dd($id);
        return redirect()->route('display.units', $id);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($type,$parent_id=null)
    {   
        if($type=="level" && $parent_id!=null){
            return back(); 
        }

        return view('bark_admin.add_level' , compact('type','parent_id'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StructureRequest $request,$type)
    {
        DB::transaction(function() use ($request,$type)
        {

            $row= Structure::create($request->all());
            
            $image = $request->file('image');
            $imgname = time() . '.' . $image->getClientOriginalExtension();
            $location = $image->move(public_path('uploads/'), $imgname);
            $row->image = $imgname;
            $row->save();
            

            if($request->file('placement_folder')){
                
                $PlacementTest = new LevelPlacementTest();
                $PlacementTest->level_id = $row->id;
                $folder = $request->file('placement_folder');
                $fileName        = time() . '.' . $folder->getClientOriginalExtension();
                $zip = Zip::open($folder);
                $codeName=time();
                $namezip=  $zip->extract(public_path('uploads/placement_test/'.$codeName));
                $zip->close();
                $pathName = '/uploads/placement_test/level_1/'.$codeName.'/traditional-mode/start.html/';
                $PlacementTest->placement_path      =  url($pathName);
                $PlacementTest->save();
                
                
            }
        
        $parent_id=null;

        if($type=='unit'){
            $addLesson=true;
            $lesson_parent=$row->id;
            $parent_id=$row->parent_id;
        }

        if($type=='lesson'){
        
            $parent_id=$row->parent_id;
        }

        if($type=='level'){
             $addUnit=true;
             $unit_parent=$row->id;
        } 

        if($type=='beginnerLevel'){
            $addLesson=true;
            $lesson_parent=$row->id;
            
        }        

    });

       Session::flash('status', 'تمت الاضافه بنجاح');
        return back();
    //    return view('bark_admin.add_level' , compact('type','parent_id','addLesson','lesson_parent','unit_parent','addUnit'));
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function show(Structure $structure)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function edit($type,  Structure $structure ,$parent_id=null , Request $request)
    {
        $id = $request->segment(5);

        $parent_id=$structure->id;

        $unitt = $structure->where('parent_id' , $structure->id )-> first();

        $placement_test = LevelPlacementTest::where('level_id', $structure->id )->first();
        
        return view('bark_admin.edit_level' , compact('type' , 'structure', 'parent_id', 'unit','placement_test','id') );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Structure $structure)
    {
        if( $request->has('image') ){
            
            $image = $request->file('image');
            dd($request->all());
            $imgname = time() . '.' . $image->getClientOriginalExtension();
            $location = $image->move(public_path('uploads/'), $imgname);
            $structure->image = $imgname;
            $structure->save();
        }
        if($request->file('placement_folder')){
            $PlacementTest = new LevelPlacementTest();
            $PlacementTest->level_id = $structure->id;
            $folder = $request->file('placement_folder');
            $fileName        = time() . '.' . $folder->getClientOriginalExtension();
            $zip = Zip::open($folder);
            $codeName=time();
            $namezip=  $zip->extract(public_path('uploads/placement_test/'.$codeName));
            $zip->close();
            
            $pathName = $codeName;
            $PlacementTest->placement_path      =  $pathName;
            $PlacementTest->save();
        }
        
        $structure->fill($request->all());
            
        // dd('test');

         Session::flash('status', 'تم التعديل بنجاح');
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function destroy(Structure $structure)
    {  
        $structure->delete();

        Session::flash('status', 'تم الحذف ');
        return back();
    }
}
