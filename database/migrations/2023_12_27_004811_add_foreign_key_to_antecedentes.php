<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToAntecedentes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('antecedentes', function (Blueprint $table) {
            $table->unsignedBigInteger('antecedentes_alergias_id')->nullable();
            $table->foreign('antecedentes_alergias_id')->references('id')->on('antecedentes_alergias');
            // 
            $table->unsignedBigInteger('antecedentes_patologicos_id')->nullable();
            $table->foreign('antecedentes_patologicos_id')->references('id')->on('antecedentes_patologicos');
            // 
            $table->unsignedBigInteger('antecedentes_no_patologicos_id')->nullable();
            $table->foreign('antecedentes_no_patologicos_id')->references('id')->on('antecedentes_no_patologicos');
            // 
            $table->unsignedBigInteger('antecedentes_gineco_id')->nullable();
            $table->foreign('antecedentes_gineco_id')->references('id')->on('antecedentes_gineco');
            // 
            $table->unsignedBigInteger('antecedentes_heredofamiliares_id')->nullable();
            $table->foreign('antecedentes_heredofamiliares_id')->references('id')->on('antecedentes_heredofamiliares');
            // 
            $table->unsignedBigInteger('antecedentes_peritanales_id')->nullable();
            $table->foreign('antecedentes_peritanales_id')->references('id')->on('antecedentes_peritanales');
            // 
            $table->unsignedBigInteger('paciente_id')->nullable();
            $table->foreign('paciente_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('antecedentes', function (Blueprint $table) {
            $table->dropForeign(['antecedentes_alergias_id']); 
            $table->dropColumn('antecedentes_alergias_id');
            // 
            $table->dropForeign(['antecedentes_patologicos_id']); 
            $table->dropColumn('antecedentes_patologicos_id');
            // 
            $table->dropForeign(['antecedentes_no_patologicos_id']); 
            $table->dropColumn('antecedentes_no_patologicos_id');
            // 
            $table->dropForeign(['antecedentes_gineco_id']); 
            $table->dropColumn('antecedentes_gineco_id');
            // 
            $table->dropForeign(['antecedentes_heredofamiliares_id']); 
            $table->dropColumn('antecedentes_heredofamiliares_id');
            // 
            $table->dropForeign(['antecedentes_peritanales_id']); 
            $table->dropColumn('antecedentes_peritanales_id');
        });
    }
}
