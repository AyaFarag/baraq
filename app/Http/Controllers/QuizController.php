<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;
use App\Http\Requests\QuizRequest;
use Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;


class QuizController extends Controller
{
    public function saveLessonQuizResultForStudent($studentDegree, $finalDegree)
    {
       
       if($this->getQuizRecordIfUserHasQuizForLessonBefore()!=null){
           
        $newStudentQuizRecord==$this->getQuizRecordIfUserHasQuizForLessonBefore();
        
        if($newStudentQuizRecord->studentResult < $studentDegree){
            return response()->json(["result" => "false", "error" => " درجتك الحالية اقل من السابقة حاول مجددا"], 401);
        }
       }
       else{
        $newStudentQuizRecord = new Quiz();
       }
               
                $newStudentQuizRecord->user_id = auth()->id();
                $newStudentQuizRecord->lesson_id = session()->get('currentAccessLessonIdByStudent');
                $newStudentQuizRecord->studentResult = $studentDegree;
                $newStudentQuizRecord->finalResult = $finalDegree;
                $newStudentQuizRecord->save();
        
                return response()->json(["result" => "true", "message" => "تم الحفظ بنجاح"], 201);
       


      


    }

    public function getQuizRecordIfUserHasQuizForLessonBefore(){

        $QuizRecord= Quiz::where(['user_id'=>auth()->id(),'lesson_id'=>session()->get('currentAccessLessonIdByStudent')])->first();

        if($QuizRecord){

            return $QuizRecord;
        }
        return null;
    }

    public function deleteLessonQuizResultForStudent()
    {

        $newStudentQuizRecord = Quiz::where(['user_id' => auth()->id(), 'lesson_id' => session()->get('currentAccessLessonIdByStudent')])->first();
        if ($newStudentQuizRecord) {
            $newStudentQuizRecord->delete();
            
            return response()->json(["message" => "deleted successfully"], 200);
        }


    }
}
