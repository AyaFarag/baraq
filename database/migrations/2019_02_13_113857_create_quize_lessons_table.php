<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuizeLessonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quize_lessons', function (Blueprint $table) {
            $table->increments('id');

            $table->integer("lesson_id")->unsigned();
            $table->foreign("lesson_id")->references("id")->on("structures")->onDelete("cascade");
            
            $table->text('question');
            $table->text('answer');
            $table->integer('trueAnswer');

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
        Schema::dropIfExists('quize_lessons');
    }
}
