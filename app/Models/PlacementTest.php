<?php

namespace App\Models;

use App\Models\User as User;
use App\Models\LevelPlacementTest as LevelPlacementTest;
use App\Models\Structure as Level;
use Illuminate\Database\Eloquent\Model;

class PlacementTest extends Model
{
    protected $fillable = [
        
        'question',
        'isTrue', 
        'user_id',
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
