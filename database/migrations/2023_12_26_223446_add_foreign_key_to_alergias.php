<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToAlergias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('alergias', function (Blueprint $table) {
            $table->unsignedBigInteger('antecedentes_alergias_id');
            $table->foreign('antecedentes_alergias_id')->references('id')->on('antecedentes_alergias');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('alergias', function (Blueprint $table) {
            $table->dropForeign(['antecedentes_alergias_id']); 
            $table->dropColumn('antecedentes_alergias_id');
        });
    }
}
