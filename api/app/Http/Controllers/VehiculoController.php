<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehiculo;

class VehiculoController extends Controller
{
    /**
     * Display a listing of the Vehiculos.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehiculos = Vehiculo::all();
        return $vehiculos;   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $vehiculo = new Vehiculo();
        $vehiculo->tipoVehiculo = $request->tipoVehiculo;
        $vehiculo->cantidadRuedas = $request->cantidadRuedas;
        $vehiculo->marca = $request->marca;
        $vehiculo->modelo = $request->modelo;
        $vehiculo->patente = $request->patente;
        $vehiculo->numeroChasis = $request->numeroChasis;
        $vehiculo->kmsRecorridos = $request->kmsRecorridos;
        $vehiculo->status = $request->status;

        $vehiculo->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $vehiculo = Vehiculo::find($request->id);
  
        
        $vehiculo->tipoVehiculo = $request->tipoVehiculo;
        $vehiculo->cantidadRuedas = $request->cantidadRuedas;
        $vehiculo->marca = $request->marca;
        $vehiculo->modelo = $request->modelo;
        $vehiculo->patente = $request->patente;
        $vehiculo->numeroChasis = $request->numeroChasis;
        $vehiculo->kmsRecorridos = $request->kmsRecorridos;
        $vehiculo->status = $request->status;

        $vehiculo->save();

        return $vehiculo;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $vehiculo = Vehiculo::destroy($request->id);

        return $vehiculo;
    }

    
    /**
     * Change status by alta or baja to then stored.
     *
     * @return \Illuminate\Http\Response
     */
    public function changeStatus(Request $request)
    {
        //
        $vehiculo = Vehiculo:: find($request->id);
    
        $vehiculo->status = $request->status;
        $vehiculo->save();

        return $vehiculo;
    }
      /**
     *  filter by model and brand
     *@param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function filterModelBrand(Request $request)
    {
       // var_dump($request);
       // die();
        $vehiculos = Vehiculo::all()->where('marca',$request->marca)->where('modelo', $request->modelo);
            $i =0;
           
        foreach($vehiculos as $vehiculo){
            
            $vec[$i] = $vehiculo;
            $i++;
        }
        return $vec;
    }

}
