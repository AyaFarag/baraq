<?php

namespace App\Models;

use App\Models\User      as User;
use App\Models\Structure as Lesson;
use Illuminate\Database\Eloquent\Model;

class LessonProgress extends Model
{
    protected $fillable = [
        'user_id',
        'lesson_id',
        'tap',
    ];

    protected $casts = [
        'tap' => 'array',
    ];

    public function user()
    {
        
        return $this->belongsTo(User::class , 'user_id');
    }
    
    public function lesson()
    {
        
        return $this->belongsTo(Lesson::class , 'lesson_id');
    }
}
