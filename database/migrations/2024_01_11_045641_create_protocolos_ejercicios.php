<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProtocolosEjercicios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('protocolos_ejercicios', function (Blueprint $table) {
            $table->id();
            $table->double('peso');
            $table->integer('repeticiones');
            $table->integer('sets');
            $table->integer('orden');
            $table->integer('hold');
            $table->double('descanso');
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
        Schema::dropIfExists('protocolos_ejercicios');
    }
}
