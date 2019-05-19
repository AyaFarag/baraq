<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UnitProgress extends Model
{
    protected $fillable = [
        'user_id',
        'unit_id',
        'status',
    ];
    public function user()
    {
        return $this->belongsTo(User::class , 'user_id');
    }
    public function unit()
    {
        return $this->belongsTo(Structure::class , 'unit_id');
    }
}
