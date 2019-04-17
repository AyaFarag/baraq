<?php

namespace App\Http\Controllers;

use App\Models\Structure as Structure;
use Illuminate\Http\Request;
use App\Http\Requests\StructureRequest;
use Session;


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
        
        return view('bark_admin.all_level' , compact('structure'));
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
       
      
        $row= Structure::create($request->all());

            $image = $request->file('image');
            $imgname = time() . '.' . $image->getClientOriginalExtension();
            $location = $image->move(public_path('uploads/'), $imgname);
            $row->image = $imgname;
            $row->save();
        
       
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
    public function edit($type,  Structure $structure ,$parent_id=null)
    {
        $parent_id=$structure->id;
        $unit = $structure->where('parent_id' , $structure->id ) -> get();
        
        return view('bark_admin.edit_level' , compact('type' , 'structure', 'parent_id', 'unit'));
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
        
        $structure->update($request->all());

        if( $request->has('image') ){
            
            $image = $request->file('image');
            $imgname = time() . '.' . $image->getClientOriginalExtension();
            $location = $image->move(public_path('uploads/'), $imgname);
            $structure->image = $imgname;
            $structure->save();
        };

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
