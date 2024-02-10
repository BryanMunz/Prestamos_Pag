<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTraslado extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('traslado', function (Blueprint $table) {
            $table->id();
            $table->string('independiente', 4)->nullValue();
            $table->string('con_auxiliares', 4)->nullValue();
            $table->string('silla_ruedas', 4)->nullValue();
            $table->string('camilla', 4)->nullValue();
            $table->string('baston', 4)->nullValue();
            $table->string('muletas', 4)->nullValue();
            $table->string('otros', 999)->nullValue();
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
        Schema::dropIfExists('traslado');
    }
}
