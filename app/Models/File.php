<?php

namespace App\Models;

use App\Models\LessonStructure as Lesson;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'name',
        'path', 
        'size',
        'fileType',
        'pathType',
        'srt',
        'extention',
    ];

    protected $casts = [

        "fileType" => "array",
    ];

    const FILE_TYPE = [

        "0" => "Embeded" ,
        "1" => "Server Url" ,
        "2" => "Upload" ,
    ];

    public function lesson()
    {
        
        return $this->hasMany(Lesson::class , "file_id");
    }
}
