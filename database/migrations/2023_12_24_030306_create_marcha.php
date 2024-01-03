<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMarcha extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marcha', function (Blueprint $table) {
            $table->id();
            $table->string('claudicante', 4)->nullValue();
            $table->string('con_auxiliares', 4)->nullValue();
            $table->string('espastica', 4)->nullValue();
            $table->string('ataxica', 4)->nullValue();
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
        Schema::dropIfExists('marcha');
    }
}
