<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiculosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehiculos', function (Blueprint $table) {
            $table->id();
            $table->string('tipoVehiculo');
            $table->integer('cantidadRuedas');
            $table->string('marca');
            $table->string('modelo');
            $table->string('patente');
            $table->string('numeroChasis');
            $table->float('kmsRecorridos');
            $table->enum('status',['alta','baja']);

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
        Schema::dropIfExists('vehiculos');
    }
}
