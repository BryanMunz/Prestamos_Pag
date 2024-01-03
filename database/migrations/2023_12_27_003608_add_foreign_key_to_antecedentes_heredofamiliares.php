<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToAntecedentesHeredofamiliares extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('antecedentes_heredofamiliares', function (Blueprint $table) {
            $table->unsignedBigInteger('papa_id');
            $table->foreign('papa_id')->references('id')->on('heredofamiliares_papa');
            // 
            $table->unsignedBigInteger('mama_id');
            $table->foreign('mama_id')->references('id')->on('heredofamiliares_mama');
            // 
            $table->unsignedBigInteger('hermanos_id');
            $table->foreign('hermanos_id')->references('id')->on('heredofamiliares_hermanos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('antecedentes_heredofamiliares', function (Blueprint $table) {
            $table->dropForeign(['papa_id']); 
            $table->dropColumn('papa_id');
            // 
            $table->dropForeign(['mama_id']); 
            $table->dropColumn('mama_id');
            // 
            $table->dropForeign(['hermanos_id']); 
            $table->dropColumn('hermanos_id');
        });
    }
}
