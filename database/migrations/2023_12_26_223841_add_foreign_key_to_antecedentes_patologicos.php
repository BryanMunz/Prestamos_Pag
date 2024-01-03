<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToAntecedentesPatologicos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('antecedentes_patologicos', function (Blueprint $table) {
            // 
            $table->unsignedBigInteger('hipertension_id');
            $table->foreign('hipertension_id')->references('id')->on('hipertension');
            // 
            $table->unsignedBigInteger('hospitalizacion_previa_id');
            $table->foreign('hospitalizacion_previa_id')->references('id')->on('hospitalizacion_previa');
            // 
            $table->unsignedBigInteger('cirugias_previas_id');
            $table->foreign('cirugias_previas_id')->references('id')->on('cirugias_previas');
            // 
            $table->unsignedBigInteger('diabetes_id');
            $table->foreign('diabetes_id')->references('id')->on('diabetes');
            // 
            $table->unsignedBigInteger('tiroides_id');
            $table->foreign('tiroides_id')->references('id')->on('tiroides');
            // 
            $table->unsignedBigInteger('hipotension_id');
            $table->foreign('hipotension_id')->references('id')->on('hipotension');
            // 
            $table->unsignedBigInteger('cardiopatias_id');
            $table->foreign('cardiopatias_id')->references('id')->on('cardiopatias');
            // 
            $table->unsignedBigInteger('traumatismo_id');
            $table->foreign('traumatismo_id')->references('id')->on('traumatismo');
            // 
            $table->unsignedBigInteger('cancer_id');
            $table->foreign('cancer_id')->references('id')->on('cancer');
            // 
            $table->unsignedBigInteger('patologias_respiratorias_id');
            $table->foreign('patologias_respiratorias_id')->references('id')->on('patologias_respiratorias');
            // 
            $table->unsignedBigInteger('gastrointestinales_id');
            $table->foreign('gastrointestinales_id')->references('id')->on('patologias_gastrointestinales');
            // 
            $table->unsignedBigInteger('otros_patologicos_id');
            $table->foreign('otros_patologicos_id')->references('id')->on('otros_patologicos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('antecedentes_patologicos', function (Blueprint $table) {
            $table->dropForeign(['hipertension_id']); 
            $table->dropColumn('hipertension_id');
            // 
            $table->dropForeign(['hospitalizacion_previa_id']); 
            $table->dropColumn('hospitalizacion_previa_id');
            // 
            $table->dropForeign(['cirugias_previas_id']); 
            $table->dropColumn('cirugias_previas_id');
            // 
            $table->dropForeign(['diabetes_id']); 
            $table->dropColumn('diabetes_id');
            // 
            $table->dropForeign(['tiroides_id']); 
            $table->dropColumn('tiroides_id');
            // 
            $table->dropForeign(['hipotension_id']); 
            $table->dropColumn('hipotension_id');
            // 
            $table->dropForeign(['cardiopatias_id']); 
            $table->dropColumn('cardiopatias_id');
            // 
            $table->dropForeign(['traumatismo_id']); 
            $table->dropColumn('traumatismo_id');
            // 
            $table->dropForeign(['cancer_id']); 
            $table->dropColumn('cancer_id');
            // 
            $table->dropForeign(['patologias_respiratorias_id']); 
            $table->dropColumn('patologias_respiratorias_id');
            // 
            $table->dropForeign(['gastrointestinales_id']); 
            $table->dropColumn('gastrointestinales_id');
            // 
            $table->dropForeign(['otros_patologicos_id']); 
            $table->dropColumn('otros_patologicos_id');
        });
    }
}
