<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class School extends Authenticatable
{
    protected $table='schools';
    protected $guard ='school';
 protected $fillable=[
     'name',
     'student_number',
     'email',
     'password',
     'mobile',
     'address',
     'start_date',
     'end_date',
     'logo',
     'website',
     'lat',
     'lng',
     'social',
 ];
    protected $hidden = ['password', 'remember_token'];
}
