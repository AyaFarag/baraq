<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class LessonTabContent extends Model
{
    protected $fillable = [
        'user_id',
        'tab_id',
        'status',
    ];
    public function user()
    {
        return $this->belongsTo(User::class , 'user_id');
    }

    public function tap()
    {
        return $this->belongsTo(LessonStructure::class , 'tab_id');
    }
}
