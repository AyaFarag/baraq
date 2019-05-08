<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuizzesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->increments('id');

            $table ->integer("user_id") -> unsigned() ;
            $table-> foreign("user_id")-> references("id")-> on("users")-> onDelete("cascade")->onUpdate("cascade");
            
            $table ->integer("lesson_id") -> unsigned() -> unique();
            $table-> foreign("lesson_id")-> references("id")-> on("structures")-> onDelete("cascade")->onUpdate("cascade");
          
            $table->string('studentResult');
            $table->string('finalResult');
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
        Schema::dropIfExists('quizzes');
    }
}
