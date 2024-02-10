<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            
            Schema::table('users', function (Blueprint $table) {
                $table->unsignedBigInteger('rol_id'); // Nombre de la nueva columna
                $table->foreign('rol_id')->references('id')->on('rol'); // 'rol' es el nombre de la tabla de referencia
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropForeign(['rol_id']); // Elimina la clave foránea
                $table->dropColumn('rol_id'); // Elimina la columna
            });
        });
    }
}
