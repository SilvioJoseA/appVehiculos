<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 
Route::get ('/vehiculos','App\Http\Controllers\VehiculoController@index');
Route::post ('/vehiculos','App\Http\Controllers\VehiculoController@store');
Route::put ('/vehiculos/{id}','App\Http\Controllers\VehiculoController@update');
Route::delete ('/vehiculos/{id}','App\Http\Controllers\VehiculoController@destroy');
Route::put ('/vehiculos/status/{id}','App\Http\Controllers\VehiculoController@changeStatus');
Route::post ('/vehiculos/filter','App\Http\Controllers\VehiculoController@filterModelBrand');

