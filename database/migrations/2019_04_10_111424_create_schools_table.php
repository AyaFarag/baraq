<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('student_number');
            $table->string('location') ->nullable();
            $table->string('email') -> unique() ;
            $table->string('mobile');
            $table->string('start_date');
            $table->string('end_date');
            $table->string('logo')-> nullable();
            $table->string('website')-> nullable();
            $table->text('social')-> nullable(); // cast to array in model
            $table->text('password')-> nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schools');
    }
}
