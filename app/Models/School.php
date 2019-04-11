<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $fillable = [
        'name',
        'student_number',
        'location',
        'email',
        'score',
        'parent_id',
        'last_login',
        'creator',
    ];
}
