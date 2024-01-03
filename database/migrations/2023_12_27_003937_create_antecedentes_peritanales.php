<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAntecedentesPeritanales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('antecedentes_peritanales', function (Blueprint $table) {
            $table->id();
            $table->string('semana_gestacion')->nullable();
            $table->string('complicaciones')->nullable();
            $table->string('parto/cesarea')->nullable();
            $table->string('hora_parto')->nullable();
            $table->string('otros', 3)->nullable();
            $table->string('descripcion', 599)->nullable();
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
        Schema::dropIfExists('antecedentes_peritanales');
    }
}
