<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    use HasFactory;
    protected $fillable = ['tipoVehiculo','cantidadRuedas','marca','modelo','patente','numeroChasis','kmsRecorridos','status'];

}
