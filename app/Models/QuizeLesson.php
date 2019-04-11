<?php

namespace App\Models;

use App\Models\Structure     as Lesson;
use App\Models\StudentAnswer as Answer;
use Illuminate\Database\Eloquent\Model;

class QuizeLesson extends Model
{
    protected $fillable = [
        'lesson_id',
        'question', 
        'answer',
        'trueAnswer',
    ];

    protected $casts = [
        'answer' => 'array',
    ];


    public function lesson()
    {
        
        return $this->belongsTo(Lesson::class , 'lesson_id');
    }
   
    public function answer()
    {
        
        return $this->hasMany(Answer::class , 'quiz_lesson_id');
    }
}
