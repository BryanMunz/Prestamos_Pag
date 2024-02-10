<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToAntecedentesGineco extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('antecedentes_gineco', function (Blueprint $table) { 
            $table->unsignedBigInteger('embarazo_id');
            $table->foreign('embarazo_id')->references('id')->on('embarazos');
            // 
            $table->unsignedBigInteger('menarca_id');
            $table->foreign('menarca_id')->references('id')->on('menarca');
            // 
            $table->unsignedBigInteger('cancer_uterino_id');
            $table->foreign('cancer_uterino_id')->references('id')->on('cancer_uterino');
            // 
            $table->unsignedBigInteger('ultima_mestruacion_id');
            $table->foreign('ultima_mestruacion_id')->references('id')->on('ultima_mestruacion');
            // 
            $table->unsignedBigInteger('otros_gineco_id');
            $table->foreign('otros_gineco_id')->references('id')->on('otros_gineco');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('antecedentes_gineco', function (Blueprint $table) {
            $table->dropForeign(['embarazo_id']); 
            $table->dropColumn('embarazo_id');
            // 
            $table->dropForeign(['menarca_id']); 
            $table->dropColumn('menarca_id');
            // 
            $table->dropForeign(['cancer_uterino_id']); 
            $table->dropColumn('cancer_uterino_id');
            // 
            $table->dropForeign(['ultima_mestruacion_id']); 
            $table->dropColumn('ultima_mestruacion_id');
            // 
            $table->dropForeign(['otros_gineco_id']); 
            $table->dropColumn('otros_gineco_id');
        });
    }
}
