<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User            as User;
use App\Models\QuizeLesson     as Quiz;
use App\Models\LessonStructure as Lesson;
use App\Models\StudentHistory  as History;
use App\Models\Structure       as Structure;
use App\Models\LessonProgress  as LessonProgress;
use App\Models\StudentProgress as StudentProgress;

class Structure extends Model
{
    protected $fillable = [
        'arname',
        'enname',
        'sort',
        'color1',
        'color2',
        'free',
        'image',
        'type',
        'parent_id',
        'code'
    ];

    const BEGINNER_LEVEL_TYPE = 'beginnerLevel';
    const LEVEL_TYPE = 'level';
    const UNIT_TYPE = 'unit';
    const LESSON_TYPE = 'lesson';

    
    protected $freeValue = 1;
    protected $paidValue = 0;

    public function getFreeValue()
    {
        return $this->freeValue;
    }
    
    public function getPaidValue()
    {
        return $this->paidValue;
    }
    // public function parent() {
    //     return $this -> belongsTo(Structure::class);
    // }
    public function parent()
    {
        
        return $this->belongsTo(Structure::class);
    }

    public function user()
    {
        
        return $this->belongsToMany(User::class, History::class , 'level_id', 'user_id');
    }

    public function lesson()
    {
        
        return $this->hasMany(Lesson::class,'lesson_id');
    }
    
    public function quiz()
    {
        
        return $this->hasMany(Quiz::class);
    }

    
    public function lessonProgress()
    {
        
        return $this->hasMany(LessonProgress::class ,'lesson_id');
    }
    
    public function studentProgress()
    {
        
        return $this->hasMany(StudentProgress::class ,'user_id');
    }

    public function placementTestLevel()
    {
        return $this->hasMany(LevelPlacementTest::class, 'level_id');
    }
}
