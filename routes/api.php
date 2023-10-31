<?php

use App\Http\Controllers\ApiConsultorioController;
use App\Http\Controllers\ApiOrginizacionController;
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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->post('/register_organizacion', [ApiOrginizacionController::class, 'store']);
Route::middleware(['auth:sanctum'])->post('/register_consultorio', [ApiConsultorioController::class, 'store']);