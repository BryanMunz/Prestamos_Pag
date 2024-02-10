<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToAntecedentesNoPatologicos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('antecedentes_no_patologicos', function (Blueprint $table) {
            // 
            $table->unsignedBigInteger('actividad_fisica_id');
            $table->foreign('actividad_fisica_id')->references('id')->on('actividad_fisica');
            // 
            $table->unsignedBigInteger('tabaquismo_id');
            $table->foreign('tabaquismo_id')->references('id')->on('tabaquismo');
            // 
            $table->unsignedBigInteger('alcoholismo_id');
            $table->foreign('alcoholismo_id')->references('id')->on('alcoholismo');
            // 
            $table->unsignedBigInteger('drogas_id');
            $table->foreign('drogas_id')->references('id')->on('drogas');
            // 
            $table->unsignedBigInteger('vacunas_recientes_id');
            $table->foreign('vacunas_recientes_id')->references('id')->on('vacunas_recientes');
            // 
            $table->unsignedBigInteger('otros_no_patologicos_id');
            $table->foreign('otros_no_patologicos_id')->references('id')->on('otros_no_patologicos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('antecedentes_no_patologicos', function (Blueprint $table) {
            $table->dropForeign(['actividad_fisica_id']); 
            $table->dropColumn('actividad_fisica_id');
            // 
            $table->dropForeign(['tabaquismo_id']); 
            $table->dropColumn('tabaquismo_id');
            // 
            $table->dropForeign(['alcoholismo_id']); 
            $table->dropColumn('alcoholismo_id');
            // 
            $table->dropForeign(['drogas_id']); 
            $table->dropColumn('drogas_id');
            // 
            $table->dropForeign(['vacunas_recientes_id']); 
            $table->dropColumn('vacunas_recientes_id');
            // 
            $table->dropForeign(['otros_no_patologicos_id']); 
            $table->dropColumn('otros_no_patologicos_id');      
        });
    }
}
