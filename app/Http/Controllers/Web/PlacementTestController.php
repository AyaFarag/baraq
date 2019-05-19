<?php

namespace App\Http\Controllers\Web;

use App\Models\Structure;
use App\Models\StudentProgress;
use App\Models\UnitProgress;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as          Level;
use App\Models\PlacementTest as      PlacementTest;
use App\Models\LevelPlacementTest as LevelPlacementTest;
use Auth;
use Carbon\Carbon;
use DB;

class PlacementTestController extends Controller
{

    public function placementTestDisplay(LevelPlacementTest $level)
    {
        if(PlacementTest::where('user_id',auth()->id())->first()==null){

            session()->put('placementTestLevelId', $level->level_id);
            
            return redirect('/uploads/placement_test/'.$level->placement_path.'/traditional-mode/start.html');
        }else{
            
            return redirect()->back();
        } 
        
    }

    public function savePlacementTestScoreForUser($userScore = 4, $testResult, $level_id){

       if($userScore < 8){

            // DB::transaction(function() use ($userScore,$testResult,$level_id){
                $placementTest = new PlacementTest();
                $placementTest->user_id = auth()->user()->id;
                $placementTest->level_id = session()->get('placementTestLevelId');
                $placementTest->score = $userScore;
                $placementTest->total = $testResult;
                $placementTest->save();
            $current_level_id=session()->get('placementTestLevelId');
                $data = [];
                $data['level_id'] = session()->get('placementTestLevelId');
                $data['user_id'] = auth()->user()->id;
                $data['updated_at'] = Carbon::now();
                $data['created_at'] = Carbon::now();
                $student_history = DB::table('student_histories')->insert($data);
                $firstUnit=Structure::where(['type'=>'unit','parent_id'=>$current_level_id])->orderBy('sort','asc')->first();
                $firstLesson=Structure::where(['type'=>'lesson','parent_id'=>$firstUnit->id])->orderBy('sort','asc')->first();
                $dataU['unit_id']=$firstUnit->id;
                $dataU['user_id']=auth()->id();
                $dataU['status']=0;
                UnitProgress::create($dataU);
               $dataL['lesson_id']=$firstLesson->id;
               $dataL['user_id']=auth()->id();
               $dataL['status']=0;
           StudentProgress::create($dataL);
            // });
       
            return response()->json( [
                "result" => false, 
                "next_url" => url('placement/result'), // result page link
                // "next_url" => "http://localhost:1234/baraq/public/placement/result", // result page link
                // "start_unit" => "1",
                // "start_level" => $level_id,
 
            ], 200);

           

       }else{

            $current_level = $level_id;
            $next_level    = $current_level+1;

            $placementTest = new PlacementTest();
            $placementTest->user_id = auth()->user()->id;
            $placementTest->score = $userScore;
            $placementTest->total = $testResult;
            $placementTest->level_id = session()->get('placementTestLevelId');
            $placementTest->save();

            return response()->json([
                "result" => true, 
                "next_url" => "/placement/test/" .$next_level. "/", // placement
                // "next_url" => "http://localhost:1234/baraq/public/placement/test/" .$next_level. "/", // placement
                "start_unit" => "",
                "start_level" => "",
 
            ], 200);

        }

    }


    public function placement_result(){

        $userLastResult = PlacementTest::where('user_id', Auth::user()->id)->latest()->first();
        $userResult = PlacementTest::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();
       
        return view('bareq_design.placement.test_result', compact('userResult','userLastResult'));
    }


}
