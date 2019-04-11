<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLessonStructuresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lesson_structures', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('type');
            $table->string('arName');
            $table->string('enName');
            $table->integer('sort');
            $table->boolean('show') ->default(0) ;
            
            $table ->integer("file_id") -> unsigned();
            $table-> foreign("file_id")-> references("id")-> on("files")-> onDelete("cascade");

            $table ->integer("lesson_id") -> unsigned();
            $table-> foreign("lesson_id")-> references("id")-> on("structures")-> onDelete("cascade");

            $table->string('code');
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
        Schema::dropIfExists('lesson_structures');
    }
}
