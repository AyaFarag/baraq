<?php

namespace App\Models;

use App\Models\PlacementTest as PlacementTest;
use App\Models\Structure as Level;
use Illuminate\Database\Eloquent\Model;

class LevelPlacementTest extends Model
{

    protected $table = 'level_placement';

    protected $fillable = [
        'placement_path',
        'level_id'
    ];


    public function level()
    {
        return $this->belongsTo(Level::class );
    }

}