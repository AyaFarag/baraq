<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonTabContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lesson_tab_contents', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("user_id") -> unsigned();
            $table->foreign("user_id")-> references("id")-> on("users")-> onDelete("cascade")->onUpdate("cascade");
            $table->integer("tab_id") -> unsigned();
            $table->foreign("tab_id")-> references("id")-> on("lesson_structures")-> onDelete("cascade")->onUpdate("cascade");

            $table->boolean('status') ->default(0);
            $table->unique(['user_id','tab_id']);
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
        Schema::dropIfExists('lesson_tab_contents');
    }
}
