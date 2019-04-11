<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserParentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_parent', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('student_id')->unsigned();
            $table-> foreign("student_id")-> references("id")-> on("users")-> onDelete("cascade")->onUpdate("cascade");
            $table->integer('parent_id')->unsigned();
            $table-> foreign("parent_id")-> references("id")-> on("users")-> onDelete("cascade")->onUpdate("cascade");
            
            $table->unique(['student_id', 'parent_id']); 

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
        Schema::dropIfExists('user_parent');
    }
}
