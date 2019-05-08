<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Structure as          Level;
use App\Models\PlacementTest as      PlacementTest;
use App\Models\LevelPlacementTest as LevelPlacementTest;

class StudentController extends Controller
{
    public function student_profile(){

        // type student level history

        return view('Asign.student_account');
    }

}