<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('year');
            $table->string('rated');
            $table->string('released');
            $table->string('runtime');
            $table->text('writer');
            $table->text('plot');
            $table->string('language');
            $table->string('country');
            $table->string('awards');
            $table->string('poster');
            $table->string('boxoffice');
            $table->string('production');
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
        Schema::dropIfExists('movies');
    }
}
