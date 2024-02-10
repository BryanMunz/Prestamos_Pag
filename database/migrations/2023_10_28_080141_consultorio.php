<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Consultorio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultorio', function(Blueprint $table){
            $table->id();
            $table->string('nombre_consultorio');
            $table->string('direccion');
            $table->string('pais');
            $table->string('estado');
            $table->string('ciudad');
            $table->string('cp');
            $table->string('logo')->nullable();
            $table->string('telefono_contacto');
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
        Schema::dropIfExists('consultorio');
    }
}
