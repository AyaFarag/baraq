<?php

namespace App\Http\Controllers;

use App\Models\File      as File;
use App\Models\LessonStructure as LessonStructure;
use App\Models\Structure as Lesson_id;
use Illuminate\Http\Request;
use App\Http\Requests\LessonStructureRequest;
use Chumper\Zipper\Zipper;
use Zip;
use DB;
use Session;
use Auth;


class LessonStructureController extends Controller
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Lesson_id $Lesson , $key = null)
    {       
       
        $data =  LessonStructure::DATA; 
        $fileType = File::FILE_TYPE;
        $media = LessonStructure::MEDIA_TYPE;
        $LessonStructure=LessonStructure::where(['lesson_id'=>$Lesson->id,'type'=>$key])->first();

        return view('bark_admin.add_lesson', compact('data', 'Lesson', 'fileType' , 'media','key','LessonStructure' ) );
    }

   
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LessonStructureRequest $request ,$lesson_id ,$key)
    {
       
        DB::transaction(function() use ($lesson_id,$request,$key)
        {

            // $unlinkZip= str_replace(url('').'/','','http://localhost:1234/bark/public/uploads/zipper/1551275231/index.html');
            // $unlinkZip2= str_replace('/index.html','',$unlinkZip);


            // move_uploaded_file(public_path('uploads/zipper/1551264376'),'c/Desktop/Recycle Bin');
            $file  =  new File();
          
            $LessonStructure=LessonStructure::where(['lesson_id'=>$lesson_id,'type'=>$key])->first();
          
        
            if($request->hasFile('file')){
                if($LessonStructure!=null){
                
                    $file=File::find($LessonStructure->file_id);
                  
                    if($file->extention=='zip'){
                        $unlinkZip= str_replace(url('').'/','',$file->path);
                        $unlinkZip2= str_replace('/index.html','',$unlinkZip);
                        $src = public_path($unlinkZip2);
                       // dd($src);
                        $this->clear_Dir($src);
                    }
                    else{
                        $unlink= str_replace(url('').'/','',$file->path);
                        $unlinkSrt= str_replace(url('').'/','',$file->srt);
                        // unlink($unlink);
                        // unlink($unlinkSrt);
                    }
                
                    
                    // dd(public_path($unlink));
                    
                        //unlink($file->path);
                }     
                $image           =  $request->file('file');
                $file->name      =  $image->getClientOriginalName(); // name           
                $file->size      =  $image->getSize(); // size
                $file->extention = $image->getClientOriginalExtension(); // extention   
                $fileName        = time() . '.' . $image->getClientOriginalExtension();
                
                if($file->extention == "zip"){
                        $zip = Zip::open($image);
                        $codeName=time();
                        $namezip=  $zip->extract(public_path('uploads/zipper/'.$codeName));
                        $zip->close();
                       
                        $fileName='zipper/'.$codeName.'/index.html';
                        // dd($fileName);
                    }

                $file->path      =   $fileName; // path
                $location        = $image->move(public_path('uploads/'), $fileName);
                
                $file->fileType  =  $request->fileType; // file type
                $file->pathType  =  $request->pathType; // path type
                
                if($request-> hasFile('srt')){
                    
                    $srt         =  $request->file('srt'); 
                    $srtName     = time() . '.' . $srt->getClientOriginalExtension(); 
                    $file->srt   = $srtName;
                    $folder      = $srt->move(public_path('srt/'), $srtName);
                }
                $file->save();
          
            }else {
                
                $file->pathType  =  $request->pathType; // path type
                $file->path      =  $request->path; // path
                $file->save();
                
            }
            if( !$file )
            {
                throw new \Exception('file not created');
            }
            if($LessonStructure==null){
                $LessonStructure = new LessonStructure();
            }         
                $LessonStructure->type      = $key;          
                $LessonStructure->arName    = $request->arName;
                $LessonStructure->enName    = $request->enName;
                $LessonStructure->sort      = $request->sort;          
            if( $request->show){
                $LessonStructure->show      = $request->show;
            }
                $LessonStructure->code      = $request->code;
                if($request-> hasFile('logo')){

                    $LessonStructure->logo      = $request->logo;
                    $logo         =  $request->file('logo'); 
                    $logoName     = time() . '.' . $logo->getClientOriginalExtension(); 
                    $LessonStructure->logo   = $logoName;
                    $folder      = $logo->move(public_path('/uploads/logo/'), $logoName);
                }
                $LessonStructure->file_id   = $file->id;
                $LessonStructure->lesson_id = $lesson_id;
                $LessonStructure->creator = Auth::user()->name;

                $LessonStructure->save();
            
            if( !$LessonStructure )
            {
                throw new \Exception('lesson not created for file');
            }
            
        });

        Session::flash('status', 'تمت الاضافه بنجاح');
        return back();

    }

    function clear_Dir($src = null)
    {
        $path = $src;
        p:
        $src = $path;
        D:
        if(is_dir($src)){
            $dir = opendir($src);
        }
        else{
            $dir= false;
        }
       if($dir!=false){

       
        while(false !== ( $file = readdir($dir)) ) 
        {
            if (( $file != '.' ) && ( $file != '..' )) 
            {
                $full = $src . '/' . $file;
                if (is_dir($full) ) 
                {
                    $src = $full;
                    goto D;
                }
                else 
                {
                    unlink($full);
                }
            }
        }
        closedir($dir);
        rmdir($src);
        goto p;
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LessonStructure  $lessonStructure
     * @return \Illuminate\Http\Response
     */
    public function show(LessonStructure $LessonStructure)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\LessonStructure  $lessonStructure
     * @return \Illuminate\Http\Response
     */
    public function edit(LessonStructure $LessonStructure)
    {
    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LessonStructure  $lessonStructure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LessonStructure $LessonStructure )
    {
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LessonStructure  $lessonStructure
     * @return \Illuminate\Http\Response
     */
    public function destroy(LessonStructure $LessonStructure)
    {
        //
    }
}
