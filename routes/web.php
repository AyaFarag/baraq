<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


$UserObject = resolve('User');
$structure = resolve('Structure');

Route::get('/', function () {

    return redirect()->route('level');
});

// student

Route::get('getLessonQuizResultForStudent/{studentDegree}/{finalDegree}', 'QuizController@saveLessonQuizResultForStudent');
Route::get('deleteLessonQuizResultForStudent', 'QuizController@deleteLessonQuizResultForStudent');



Route::get('/level', 'LevelController@index')->name('level');

Route::group(['middleware' => ['free']], function () {

    Route::pattern('level', '[0-9]+');
    Route::pattern('unit', '[0-9]+');
    Route::pattern('lesson', '[0-9]+');

    Route::get('/unit/{level}', 'UnitController@create')->name('unit');

    Route::get('/lesson/{unit}', 'LessonController@create')->name('lesson');

    Route::get('/content/{lesson}', 'LessonController@show')->name('lesson.content');
});
Route::get('school/login','SchoolController@schoolLogin');
Route::post('school/login','SchoolController@login');
Route::get('school/logout','SchoolController@logout');
Route::group(['middleware' => 'school'], function () {
    Route::get('school/dashboard', 'SchoolController@index');
    Route::get('school/student', 'SchoolController@studentIndex');
    Route::get('add/student', 'SchoolController@addStudent');
    Route::post('add/student', 'SchoolController@storeStudent');
    Route::get('edit/student/{id}', 'SchoolController@editStudent');
    Route::post('update/student/{id}', 'SchoolController@updateStudent');
    Route::get('delete/student/{id}', 'SchoolController@deleteStudent');
});
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

// =========================================================================================
//
// admin 
//
// =========================================================================================


Route::group(['middleware' => ['auth', 'role:' . $UserObject->getParentValue()]], function () {

    Route::get('create/child', 'ParentController@asignChildForm')->name('create.child');
    Route::get('asign/child/', 'ParentController@asignChildEmailForm')->name('child.emailform');
    Route::post('asign/child/email', 'ParentController@asignChildEmail')->name('asign.child');
    Route::post('asign/child/action', 'ParentController@asignChildToParent')->name('child.action');
   
});

Route::group(['middleware' => ['auth', 'role:' . $UserObject->getStudentValue()]], function () {

    Route::get('asign/parent', 'ParentController@asignParentForm')->name('asign.parent');

    Route::post('send/parent/invitation/{user}', 'ParentController@sendParentInvitation')->name('parent.invitation');

});


Route::get('parent/approve/{childId}/{email}', 'ParentController@parentApprove')->name('parent.approve');

Route::post('asign/parent/login/{childId}/{email}', 'ParentController@loginAndAsignParent')->name('loginAndAsignParent');
Route::get('parentHome', 'ParentController@parentHome');

Route::post('asign/parent/register/{childId}/{email}', 'ParentController@registerAndAsignParent')->name('registerAndAsignParent');
