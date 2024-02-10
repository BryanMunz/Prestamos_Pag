<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExploracionFisica extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exploracion_fisica', function (Blueprint $table) {
            $table->id();
            $table->string('cabeza_parte_frontal', 699)->nullable();
            $table->string('cabeza_parte_posterior', 699)->nullable();
            $table->string('cuello_parte_frontal', 699)->nullable();
            $table->string('cuello_parte_posterior', 699)->nullable();
            $table->string('extremidad_superior_izquierda_parte_frontal', 699)->nullable();
            $table->string('extremidad_superior_izquierda_parte_posterior', 699)->nullable();
            $table->string('extremidad_superior_derecha_parte_frontal', 699)->nullable();
            $table->string('extremidad_superior_derecha_parte_posterior', 699)->nullable();
            $table->string('tronco_parte_frontal', 699)->nullable();
            $table->string('tronco_parte_posterior', 699)->nullable();
            $table->string('extremidad_inferior_izquierda_parte_frontal', 699)->nullable();
            $table->string('extremidad_inferior_izquierda_parte_posterior', 699)->nullable();
            $table->string('extremidad_inferior_derecha_parte_frontal', 699)->nullable();
            $table->string('extremidad_inferior_derecha_parte_posterior', 699)->nullable();
            $table->string('zona_pelvica_frontal', 699)->nullable();
            $table->string('zona_pelvica_posterior', 699)->nullable();

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
        Schema::dropIfExists('exploracion_fisica');
    }
}
