<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUnitProgressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unit_progresses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("user_id") -> unsigned();
            $table->foreign("user_id")-> references("id")-> on("users")->onDelete("cascade")->onUpdate("cascade");
            $table->integer("unit_id") -> unsigned();
            $table->foreign("unit_id")-> references("id")-> on("structures")-> onDelete("cascade")->onUpdate("cascade");

            $table->boolean('status') ->default(0);
            $table->unique(['user_id','unit_id']);
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
        Schema::dropIfExists('unit_progresses');
    }
}
