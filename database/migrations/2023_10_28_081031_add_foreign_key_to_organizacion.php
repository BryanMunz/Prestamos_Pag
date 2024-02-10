<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToOrganizacion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('organizacion', function (Blueprint $table) {
            $table->unsignedBigInteger('organizacion_id'); // Nombre de la nueva columna
            $table->foreign('organizacion_id')->references('id')->on('users'); // 'rol' es el nombre de la tabla de referencia
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('organizacion', function (Blueprint $table) {
            $table->dropForeign(['organizacion_id']); // Elimina la clave foránea
            $table->dropColumn('organizacion_id'); // Elimina la columna
        });
    }
}
