<?php

namespace App\Models;

use App\Models\User        as User;
use App\Models\QuizeLesson as Quiz;
use Illuminate\Database\Eloquent\Model;

class StudentAnswer extends Model
{
    protected $fillable = [
        'quiz_lesson_id',
        'user_id', 
        'answer',
        'degree',
    
    ];

    public function quiz()
    {
        
        return $this->belongsTo(Quiz::class , 'quiz_lesson_id');
    }

    public function user()
    {
        
        return $this->belongsTo(User::class , 'user_id');
    }
}
