<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_progresses', function (Blueprint $table) {
            $table->increments('id');
            
            $table ->integer("user_id") -> unsigned();
            $table-> foreign("user_id")-> references("id")-> on("users")-> onDelete("cascade");
            
            $table ->integer("lesson_id") -> unsigned();
            $table-> foreign("lesson_id")-> references("id")-> on("structures")-> onDelete("cascade");
            
            $table->boolean('status') ->default(0);

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
        Schema::dropIfExists('student_progresses');
    }
}
