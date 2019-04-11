<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_answers', function (Blueprint $table) {
            
            $table->increments('id');
            $table ->integer("quiz_lesson_id") -> unsigned();
            $table->foreign("quiz_lesson_id")-> references("id")-> on("quize_lessons")-> onDelete("cascade");

            $table ->integer("user_id") -> unsigned();
            $table-> foreign("user_id")-> references("id")-> on("users")-> onDelete("cascade");
            
            $table->integer('answer');
            $table->integer('degree');
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
        Schema::dropIfExists('student_answers');
    }
}
