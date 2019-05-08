<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\PlacementTest as Test;
use App\Models\Structure as Level;
use App\Models\StudentAnswer as Answer;
use App\Models\StudentHistory as History;
use App\Models\LessonProgress as LessonProgress;
use App\Models\StudentProgress as StudentProgress;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'score',
        'parent_id',
        'last_login',
        'creator',
    ];


    const ROLES = [
        "0" => "رئيس",
        "1" => "مدخل بيانات",
        "2" => "طالب",
        "3" => "والد",
    ];


    protected $AdminValue = 0;
    protected $DataEntryValue = 1;
    protected $StudentValue = 2;
    protected $ParentValue = 3;

    /**
     * @return mixed
     */
    public function getAdminValue()
    {
        return $this->AdminValue;
    }

    public function getDataEntryValue()
    {
        return $this->DataEntryValue;
    }



    public function getStudentValue()
    {
        return $this->StudentValue;
    }
 
    public function getParentValue()
    {
        return $this->ParentValue;
    }



    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function level()
    {
        return $this->belongsToMany(Level::class,'student_histories','user_id', 'level_id');
    }

    public function test()
    {
        return $this->hasOne(Test::class);
    }

    public function lessonProgress()
    {

        return $this->hasMany(LessonProgress::class, 'lesson_id');
    }

    public function studentProgress()
    {

        return $this->hasMany(StudentProgress::class, 'user_id');
    }

    public function answer()
    {

        return $this->hasMany(Answer::class, 'quiz_lesson_id');
    }

   
}
