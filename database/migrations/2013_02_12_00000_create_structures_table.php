<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStructuresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('structures', function (Blueprint $table) {
            $table->increments('id');
            $table->string('arname');
            $table->string('enname');
            $table->integer('sort');
            $table->string('color1')-> nullable();
            $table->string('color2')-> nullable();
            $table->boolean('free')->default(false) ;
            $table->string('image')->nullable();
            $table->enum('type', ['beginnerLevel','level', 'unit', 'lesson']);
            $table ->integer("parent_id")->unsigned()->nullable();
            $table ->foreign("parent_id")->references('id')->on('structures')->onDelete('cascade');
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
        Schema::dropIfExists('structures');
    }
}
