<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToHeredofamiliaresPapa extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('heredofamiliares_papa', function (Blueprint $table) {
            $table->unsignedBigInteger('diabetes_id');
            $table->foreign('diabetes_id')->references('id')->on('diabetes');
            // 
            $table->unsignedBigInteger('cardiopatias_id');
            $table->foreign('cardiopatias_id')->references('id')->on('cardiopatias');
            // 
            $table->unsignedBigInteger('hipertension_id');
            $table->foreign('hipertension_id')->references('id')->on('hipertension');
            // 
            $table->unsignedBigInteger('tiroides_id');
            $table->foreign('tiroides_id')->references('id')->on('tiroides');
            // 
            $table->unsignedBigInteger('otros_heredofamiliares_id');
            $table->foreign('otros_heredofamiliares_id')->references('id')->on('otros_heredofamiliares');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('heredofamiliares_papa', function (Blueprint $table) {
            $table->dropForeign(['diabetes_id']); 
            $table->dropColumn('diabetes_id');
            // 
            $table->dropForeign(['cardiopatias_id']); 
            $table->dropColumn('cardiopatias_id');
            // 
            $table->dropForeign(['hipertension_id']); 
            $table->dropColumn('hipertension_id');
            // 
            $table->dropForeign(['tiroides_id']); 
            $table->dropColumn('tiroides_id');
            // 
            $table->dropForeign(['otros_heredofamiliares_id']); 
            $table->dropColumn('otros_heredofamiliares_id');
        });
    }
}
