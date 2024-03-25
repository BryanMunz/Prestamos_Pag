<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Ejercicios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ejercicios', function(Blueprint $table){
            $table->id();
            $table->string('nombre');
            $table->string('imagen', 499);
            $table->string('video', 499);
            $table->string('descripcion', 899);
            $table->string('zona', 499);
            $table->string('dificultad', 499);
            $table->string('especialidad', 499);
            $table->string('equipo', 499);
            $table->string('posicion', 499);
            $table->timestamp('last_used_at')->nullable();
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
        Schema::dropIfExists('ejercicios');
    }
}