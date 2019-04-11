<?php

namespace App\Models;

use App\Models\User      as User;
use App\Models\Structure as Level;
use Illuminate\Database\Eloquent\Model;

class StudentHistory extends Model
{
    protected $table='student_histories';
    protected $fillable = [
        'user_id',
        'level_id',
 
    ];


    public function user()
    {
        
        return $this->belongsTo(User::class );
    }

    public function level()
    {
        
        return $this->belongsTo(Level::class );
    }
}
