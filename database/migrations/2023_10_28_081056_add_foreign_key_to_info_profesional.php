<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToInfoProfesional extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('info_profesional', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id'); // Nombre de la nueva columna
            $table->foreign('user_id')->references('id')->on('users'); // 'rol' es el nombre de la tabla de referencia
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('info_profesional', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // Elimina la clave foránea
            $table->dropColumn('user_id');
        });
    }
}
