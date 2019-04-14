<?php

namespace App\Models;

use App\User as User;
use App\Models\QuizeLesson as Quiz;
use Illuminate\Database\Eloquent\Model;

class School_user extends Model
{
    protected $table='school_user';
    protected $fillable = [
        'student_id',
        'school_id',
    ];

    public function student()
    {
        
        return $this->belongsTo(User::class , 'student_id');
    }

    public function school()
    {
        
        return $this->belongsTo(School::class , 'school_id');
    }
}
