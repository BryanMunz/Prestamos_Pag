<?php

use App\Http\Controllers\ApiConsultorioController;
use App\Http\Controllers\ApiOrginizacionController;
use App\Http\Controllers\Pacientes\ApiPacienteController;
use App\Http\Controllers\User\ApiUser;
use App\Models\User;
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

// Pacientes
Route::middleware(['auth:sanctum'])->post('/register_paciente', [ApiPacienteController::class, 'store']);

Route::middleware(['auth:sanctum'])->get('/pacientes', [ApiPacienteController::class, 'getPacientes']);

Route::middleware(['auth:sanctum'])->delete('/pacientes/delete/{id}', [ApiPacienteController::class, 'delete']);

Route::middleware(['auth:sanctum'])->post('/user/update/wizard', [ApiUser::class, 'update']);