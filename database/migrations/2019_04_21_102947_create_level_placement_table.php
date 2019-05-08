<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLevelPlacementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('level_placement', function (Blueprint $table) {
            $table->increments('id');

            $table ->integer("level_id") ->unsigned()-> unique();
            $table-> foreign("level_id")->references("id")->on("structures")->onDelete("cascade");

            $table->string('placement_path');

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
        Schema::dropIfExists('level_placement');
    }
}
