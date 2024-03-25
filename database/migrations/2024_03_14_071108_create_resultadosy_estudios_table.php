<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultadosyEstudiosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resultadosy_estudios', function (Blueprint $table) {
            $table->id();
            $table->string('name', 599);
            $table->string('size', 255);
            $table->string('location', 599);
            $table->unsignedBigInteger('historia_clinica_id');
            $table->timestamps();

            $table->foreign('historia_clinica_id')->references('id')->on('historia_clinica');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resultadosy_estudios');
    }
}
