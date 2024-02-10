<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToConsultorio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('consultorio', function (Blueprint $table) {
            $table->unsignedBigInteger('consultorio_id'); // Nombre de la nueva columna
            $table->foreign('consultorio_id')->references('id')->on('organizacion'); // 'rol' es el nombre de la tabla de referencia
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('consultorio', function (Blueprint $table) {
            $table->dropForeign(['consultorio_id']); // Elimina la clave foránea
            $table->dropColumn('consultorio_id'); // Elimina la columna
        });
    }
}
