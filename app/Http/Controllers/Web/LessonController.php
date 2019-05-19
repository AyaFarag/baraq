<?php

namespace App\Http\Controllers\Web;


use App\Models\LessonTabContent;
use App\Models\PlacementTest;
use App\Models\StudentHistory;
use App\Models\StudentProgress;
use App\Models\UnitProgress;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as Lesson;
use App\Models\LessonStructure as Content;




class LessonController extends Controller
{

    public function index($unit)
    {
        $Lesson = Lesson::where(['parent_id' => $unit, 'type' => 'lesson'])->orderBy('sort', 'asc')->get();
        $role=new User;
        if(auth()->check() && auth()->user()->role==$role->getStudentValue()) {
            $assginUnit=UnitProgress::where(['user_id'=>auth()->id(),'unit_id'=>$unit])->first();
            $previousLevel = PlacementTest::where('user_id', auth()->id())->get()->pluck('level_id')->toArray();
            $allowUnit = Lesson::where(['type' => 'unit'])->whereIn('parent_id', $previousLevel)->get()->pluck('id')->toArray();
            if($assginUnit || in_array($unit,$allowUnit) ){
            return view('bareq_design.lesson', compact('Lesson', 'unit'));
            }else{
                return redirect()->back()->withErrors('يجب الانتهاء من الوحدة السابقة اولا');
            }
        }else{
            return view('bareq_design.lesson', compact('Lesson', 'unit'));
        }
    }
    

    public function lesson_content(Request $request, Lesson $Lesson)
    {
        $contentRequired = Content::with('file')->whereIn('type', Content::DATA_REQUIRED)->get();
        $contentNotRequired = Content::with('file')->whereNotIn('type', Content::DATA_REQUIRED)->get();
        session()->put('currentAccessLessonIdByStudent', $Lesson->id);
        $lessonId = $request->segment(2);
        $role=new User();
        if(auth()->check()&& auth()->user()->role==$role->getStudentValue()) {
            $assginLesson = StudentProgress::where(['lesson_id' => $lessonId, 'user_id' => auth()->id()])->first();
            $previousLevel = PlacementTest::where('user_id', auth()->id())->get()->pluck('level_id')->toArray();
            $allowUnit = $Lesson::where(['type' => 'unit'])->whereIn('parent_id', $previousLevel)->get()->pluck('id')->toArray();
            $allowLesson = $Lesson::where('type', 'lesson')->whereIn('parent_id', $allowUnit)->get()->pluck('id')->toArray();
            if ($assginLesson || in_array($lessonId, $allowLesson)) {
                return view('bareq_design.innerLesson', compact('Lesson', 'contentRequired', 'contentNotRequired', 'lessonId'));
            } else {
                return redirect()->back()->withErrors('يجب الانتهاء من الدرس السابق اولا');
            }
        }else{
            return view('bareq_design.innerLesson', compact('Lesson', 'contentRequired', 'contentNotRequired', 'lessonId'));
        }
    }

    public function assignTab(Request $request){
        $role=new User();
        if(auth()->user()->role==$role->getStudentValue()){
        $assginTab=LessonTabContent::where(['tab_id'=>$request->tab_id,'user_id'=>$request->user_id])->first();
        if(!$assginTab){
            $data['user_id']=$request->user_id;
            $data['tab_id']=$request->tab_id;
            $data['status']=0;
            LessonTabContent::create($data);
        }
        }
    }
    public function nextLesson($lesson_id)
    {
        $role = new User();
        if (auth()->user()->role == $role->getStudentValue()) {
            $assginedLesson = StudentProgress::where(['user_id' => auth()->id(), 'lesson_id' => $lesson_id])->first();
            $data['status'] = 1;
            $assginedLesson->update($data);
            $currentLesson = Lesson::find($lesson_id);
            $nextLesson = Lesson::where(['type' => 'lesson', 'parent_id' => $currentLesson->parent_id])->where('sort', '>', $currentLesson->sort)->first();
            if ($nextLesson) {
                $dataL['user_id'] = auth()->id();
                $dataL['lesson_id'] = $nextLesson->id;
                $dataL['status'] = 0;
                StudentProgress::create($dataL);
                return redirect(url('lesson/' . $nextLesson->parent_id))->with('success', $currentLesson->arname . 'تم الإنتهاء من الدرس ');
            } else {
                //assgin next Unit and next Lesson
                $currentUnit = Lesson::find($currentLesson->parent_id);
                $unitData['status'] = 1;
                $currentUnit->update($unitData);
                $nextUnit = Lesson::where(['parent_id' => $currentUnit->parent_id, 'type' => 'unit'])->orderBy('sort', 'asc')->where('sort', '>', $currentUnit->sort)->first();
                if ($nextUnit) {
                    $dataU['user_id'] = auth()->id();
                    $dataU['unit_id'] = $nextUnit->id;
                    $dataU['status'] = 0;
                    UnitProgress::create($dataU);
                    $firstLesson = Lesson::where(['type' => 'lesson', 'parent_id' => $nextUnit->id])->orderBy('sort', 'asc')->first();
                    $dataL['user_id'] = auth()->id();
                    $dataL['lesson_id'] = $firstLesson->id;
                    $dataL['status'] = 0;
                    StudentProgress::create($dataL);
                    return redirect(url('unit/' . $nextUnit->parent_id))->with('success', $currentUnit->arname . 'تم الإنتهاء من الوحدة ');
                } else {
                    $level = StudentHistory::where('user_id', auth()->id())->orderBy('created_at', 'desc')->first();
                    $currentLevel = Lesson::find($level->level_id);
                    $nextLevel = Lesson::where(['type' => 'level', 'parent_id' => null])->orderBy('sort', 'asc')->where('sort', '>', $currentLevel->sort)->first();
                    if ($nextLevel) {
                        $dataV['user_id'] = auth()->id();
                        $dataV['level_id'] = $nextLevel->id;
                        StudentHistory::create($dataV);
                        $firstUnit = Lesson::where(['type' => 'unit', 'parent_id' => $nextLevel->id])->orderBy('sort', 'asc')->first();
                        $firstLesson = Lesson::where(['type' => 'lesson', 'parent_id' => $firstUnit->id])->orderBy('sort', 'asc')->first();
                        $dataU['user_id'] = auth()->id();
                        $dataU['unit_id'] = $firstUnit->id;
                        $dataU['status'] = 0;
                        UnitProgress::create($dataU);
                        $dataL['user_id'] = auth()->id();
                        $dataL['lesson_id'] = $firstLesson->id;
                        $dataL['status'] = 0;
                        StudentProgress::create($dataL);
                        return redirect(url('/'))->with('success', $currentLevel->arname . 'تم الإنتهاء من المستوي ');
                    } else {
                        return redirect(url('/'))->with('success', 'تم الإنتهاء من كافة المستويات');
                    }
                }
            }
        }
    }
}