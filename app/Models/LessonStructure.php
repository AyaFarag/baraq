<?php

namespace App\Models;

use App\Models\File      as File;
use App\Models\Structure as Lesson;

use Illuminate\Database\Eloquent\Model;

class LessonStructure extends Model
{
    protected $fillable = [
        'type',
        'arName', 
        'enName',
        'sort',
        'show',
        'file_id',
        'lesson_id',
        'code',
        'creator',
    ];

    const DATA = [

        '0' => 'شاهد وتعلم',
        '1' => 'لاحظ وتعلم',
        '9' => 'استمع وتعلم',
        '11' => 'غن وتعلم',
        '2' => 'أنشودة',
        '3' => 'كلماتي',
        '4' => 'اقرأ',
        '5' => 'اكتب',
        '6' => 'تدرب',
        '7' => 'العب',
        '8' => 'لون',
        '10' => 'تحدث',
        '12' => 'كلمات وصور',
        '13' => 'التراكيب اللغويه',
        '14' => 'البلاغه',
        '15' => 'اختبر نفسك',
    ];
    
    const DATA_REQUIRED   =[
        0,
        13,
        11,
        3,
        1

    ];
    const MEDIA_TYPE = [
        '0' => 'Embeded',
        '1' => 'Video',
    ];

    public function lesson()
    {
        
        return $this->belongsTo(Lesson::class );
    }
    
    public function file()
    {
        
        return $this->belongsTo(File::class , 'file_id');
    }


}
