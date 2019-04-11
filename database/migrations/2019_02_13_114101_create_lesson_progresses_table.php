<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lesson_progresses', function (Blueprint $table) {
            $table->increments('id');

            $table ->integer("user_id") -> unsigned();
            $table-> foreign("user_id")-> references("id")-> on("users")-> onDelete("cascade");
            
            $table ->integer("lesson_id") -> unsigned();
            $table-> foreign("lesson_id")-> references("id")-> on("structures")-> onDelete("cascade");
            
            $table->string('tap');
            
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
        Schema::dropIfExists('lesson_progresses');
    }
}
