<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PlacementTestRequest;
use App\Models\LevelPlacementTest as LevelPlacementTest;
use App\Models\Structure as Level;
use Zip;
use Session;

class PlacementTestController extends Controller
{

    protected $PlacementTest;


    public function __construct(LevelPlacementTest $PlacementTest){

        $this->PlacementTest = $PlacementTest;
    }

    public function index(){

        return view('bark_admin.placement.index');

    }

    public function create(){

        $level = Level::where('type', 'level')->orderBy('id','asc')->get();
        return view('bark_admin.placement.form', compact('level'));

    }


    public function addPlacementTest(Request $request){

        $PlacementTest = new LevelPlacementTest();
        $PlacementTest->level_id = $request->level_id;
        $folder = $request->file('placement_folder');
        $fileName        = time() . '.' . $folder->getClientOriginalExtension();
        $zip = Zip::open($folder);
        $codeName=time();
        $namezip=  $zip->extract(public_path('uploads/placement_test/'.$codeName));
        $zip->close();
        $pathName = '/uploads/placement_test/'.$codeName.'/traditional-mode/start.html/';
        $PlacementTest->placement_path      =  $pathName;
        
        $PlacementTest->save();

        Session::flash('status', 'تم الحفظ بنجاح');
        return back();
    }

    public function editPlacementTest($id){

        $PlacementTest = $this->PlacementTest->find($id);

        return view('bark_admin.placement.edit', ['PlacementTest' => $PlacementTest]);
    }
        
    
    public function updatePlacementTest(Request $request, $id){

        $PlacementTest = $this->PlacementTest->find($id);
        $PlacementTest->level_id = $request->level_id;
        $PlacementTest->placement_path = $request->placement_path;
        $PlacementTest->save();

        Session::flash('status', 'تم التعديل بنجاح');
        return back();
    }
    
    public function deletePlacementTest($id){

        $PlacementTest = $this->PlacementTest->destroy($id);

        Session::flash('status', 'تم الحذف بنجاح');
        return back();
        
    }

}