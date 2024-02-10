<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToProtocolosEjercicios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('protocolos_ejercicios', function (Blueprint $table) {
            $table->unsignedBigInteger('protocolo_id');
            $table->foreign('protocolo_id')->references('id')->on('protocolos');
            $table->unsignedBigInteger('ejercicio_id');
            $table->foreign('ejercicio_id')->references('id')->on('ejercicios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('protocolos_ejercicios', function (Blueprint $table) {
            $table->dropForeign(['protocolo_id']); 
            $table->dropColumn('protocolo_id');
            $table->dropForeign(['ejercicio_id']); 
            $table->dropColumn('ejercicio_id');
        });
    }
}
