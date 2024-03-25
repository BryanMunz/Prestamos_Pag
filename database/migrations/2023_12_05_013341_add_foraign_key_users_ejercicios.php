<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForaignKeyUsersEjercicios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('users_ejercicios', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('ejercicio_id');
            $table->foreign('ejercicio_id')->references('id')->on('ejercicios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users_ejercicios', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id'); 
            $table->dropForeign(['ejercicio_id']);
            $table->dropColumn('ejercicio_id'); 
        });
    }
}