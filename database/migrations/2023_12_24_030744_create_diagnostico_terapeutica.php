<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiagnosticoTerapeutica extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diagnostico_terapeutica', function (Blueprint $table) {
            $table->id();
            $table->string('observaciones_clinicas', 599);
            $table->string('objetivos_fisioterapeuticos', 599);
            $table->string('analisis', 599);
            $table->string('diagnostico_medico', 599);
            $table->string('diagnostico_fisioterapeutico', 599);
            $table->string('plan_tratamiento', 599);
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
        Schema::dropIfExists('diagnostico_terapeutica');
    }
}
