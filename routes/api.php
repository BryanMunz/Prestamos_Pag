<?php

use App\Http\Controllers\Antecedentes\Alergias\ApiAntecedentesAlergias;
use App\Http\Controllers\Antecedentes\ApiAntecedentes;
use App\Http\Controllers\Antecedentes\Gineco\ApiAntecedentesGinecoObtetricos;
use App\Http\Controllers\Antecedentes\NoPatologicos\ApiAntecedentesNoPatologicos;
use App\Http\Controllers\Antecedentes\Patologicos\ApiAntecedentesPatologicos;
use App\Http\Controllers\ApiConsultorioController;
use App\Http\Controllers\ApiOrginizacionController;
use App\Http\Controllers\Ejercicios\ApiEjercicioController;
use App\Http\Controllers\HistoriaClinica\ApiDiagnosticoTerapeutico;
use App\Http\Controllers\HistoriaClinica\ApiExpliracionFisica;
use App\Http\Controllers\HistoriaClinica\ApiHistoriaClinica;
use App\Http\Controllers\HistoriaClinica\ApiMarcha;
use App\Http\Controllers\HistoriaClinica\ApiMotivos;
use App\Http\Controllers\HistoriaClinica\ApiNotasEvolucion;
use App\Http\Controllers\HistoriaClinica\ApiSignosVitales;
use App\Http\Controllers\HistoriaClinica\ApiSomatometria;
use App\Http\Controllers\HistoriaClinica\ApiTraslado;
use App\Http\Controllers\HistoriaClinica\ApiResultadoyEstudios;
use App\Http\Controllers\Pacientes\ApiPacienteController;

use App\Http\Controllers\Protocolos\ApiComentarios;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\Protocolos\ApiProtocolo;
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

// Ejercicios
Route::middleware(['auth:sanctum'])->post('/register_ejercicio', [ApiEjercicioController::class, 'store']);

Route::middleware(['auth:sanctum'])->get('/obtener_ejercicios', [ApiEjercicioController::class, 'ejercicios']);

// Antecedentes

// Alergias
Route::middleware(['auth:sanctum'])->post('/antecedentes/update_alergias', [ApiAntecedentesAlergias::class, 'store']);

Route::middleware(['auth:sanctum'])->get('/antecedentes/alergias', [ApiAntecedentesAlergias::class, 'getAlergias']);

// ******************* Patologicos *******************

// Hipertension
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_hipertension', [ApiAntecedentesPatologicos::class, 'updateHipertension']);

// Hospitalizacion
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_hospitalizacion', [ApiAntecedentesPatologicos::class, 'updateHospitalizacion']);

// Cirugias
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_cirugias', [ApiAntecedentesPatologicos::class, 'updateCirugias']);

// Diabetes
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_diabetes', [ApiAntecedentesPatologicos::class, 'updateDiabetes']);

// Tiroides
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_tiroides', [ApiAntecedentesPatologicos::class, 'updateTiroides']);

// Hipotension
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_hipotension', [ApiAntecedentesPatologicos::class, 'updateHipotension']);

// Cardiopatias
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_cardiopatia', [ApiAntecedentesPatologicos::class, 'updateCardiopatias']);

// Traumatismo
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_trumatismo', [ApiAntecedentesPatologicos::class, 'updateTraumatismo']);

// Cancer
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_cancer', [ApiAntecedentesPatologicos::class, 'updateCancer']);

// Respiratorias
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_respiratorias', [ApiAntecedentesPatologicos::class, 'updatePatologiasRespiratorias']);

// Gastrointestinales
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_gastrointestinales', [ApiAntecedentesPatologicos::class, 'updateGastrointestinales']);

// Gastrointestinales
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_otros', [ApiAntecedentesPatologicos::class, 'updateOtrosPatologicos']);

// Guardar descripciones
Route::middleware(['auth:sanctum'])->post('/antecedentes/patologias/update_descripciones', [ApiAntecedentesPatologicos::class, 'updateDescripciones']);

// Obtener Patologicos
Route::middleware(['auth:sanctum'])->get('/antecedentes/patologicos', [ApiAntecedentesPatologicos::class, 'getAntecedentesPatologicos']);

// ******************* Fin Patologicos *******************

// ******************* No Patologicos *******************

Route::middleware(['auth:sanctum'])->post('/antecedentes/no_patologicos/update_actividad_fisica', [ApiAntecedentesNoPatologicos::class, 'updateActividadFisica']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/no_patologicos/update_tabaquismo', [ApiAntecedentesNoPatologicos::class, 'updateTabaquismo']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/no_patologicos/update_alcoholismo', [ApiAntecedentesNoPatologicos::class, 'updateAlcohol']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/no_patologicos/update_drogas', [ApiAntecedentesNoPatologicos::class, 'updateDrogas']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/no_patologicos/update_vacunas_recientes', [ApiAntecedentesNoPatologicos::class, 'updateVacunas']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/no_patologicos/update_otros', [ApiAntecedentesNoPatologicos::class, 'updateOtrosNoPatologicos']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/no_patologias/update_descripciones', [ApiAntecedentesNoPatologicos::class, 'updateDescripciones']);

Route::middleware(['auth:sanctum'])->get('/antecedentes/no_patologicos', [ApiAntecedentesNoPatologicos::class, 'getAntecedentesNoPatologicos']);

// ******************* Fin No Patologicos *******************

// ******************* Ginecos-Obstetricos *******************

Route::middleware(['auth:sanctum'])->post('/antecedentes/gineco_obstetricos/update_embarazo', [ApiAntecedentesGinecoObtetricos::class, 'updateEmbarazo']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/gineco_obstetricos/update_cancer_uterino', [ApiAntecedentesGinecoObtetricos::class, 'updateCancerUterino']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/gineco_obstetricos/update_otros', [ApiAntecedentesGinecoObtetricos::class, 'updateOtroGineco']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/gineco_obstetricos/update_fecha_menarca', [ApiAntecedentesGinecoObtetricos::class, 'updateMenarca']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/gineco_obstetricos/update_ultima_mestruacion', [ApiAntecedentesGinecoObtetricos::class, 'updateUltimaMestruacion']);

Route::middleware(['auth:sanctum'])->post('/antecedentes/gineco_obstetricos/update_descripciones', [ApiAntecedentesGinecoObtetricos::class, 'updateDescripciones']);

Route::middleware(['auth:sanctum'])->get('/antecedentes/gineco_obstetricos', [ApiAntecedentesGinecoObtetricos::class, 'getAntecedentesGineco']);

Route::middleware(['auth:sanctum'])->get('/antecedentes', [ApiAntecedentes::class, 'getAntecedentes']);

// ******************* Fin Ginecos-Obstetricos *******************

// Historia clinica
Route::middleware(['auth:sanctum'])->post('/register_historia_clinica', [ApiHistoriaClinica::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_somatometria', [ApiSomatometria::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_signos_vitales', [ApiSignosVitales::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_marcha', [ApiMarcha::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_traslado', [ApiTraslado::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_motivos', [ApiMotivos::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_diagnostico_terapeutico', [ApiDiagnosticoTerapeutico::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_notas_evulucion', [ApiNotasEvolucion::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_exploracion_fisica', [ApiExpliracionFisica::class, 'store']);

Route::middleware(['auth:sanctum'])->post('/historia_clinica/register_resultados_y_estudios', [ApiResultadoyEstudios::class, 'store']);

Route::middleware(['auth:sanctum'])->get('/historia_clinica/{id}/resultados_y_estudios', [ApiResultadoyEstudios::class, 'getByHistoriaClinica']);

Route::middleware(['auth:sanctum'])->delete('/historia_clinica/delete_archivo/{id}', [ApiResultadoyEstudios::class, 'deleteArchivo']);

Route::middleware(['auth:sanctum'])->get('/historias_clinicas', [ApiHistoriaClinica::class, 'getHistoriasClinicas']);

Route::middleware(['auth:sanctum'])->get('/historias_clinicas/datos', [ApiHistoriaClinica::class, 'getDatosHistoriaClinicaS']);

Route::middleware(['auth:sanctum'])->get('/historias_clinicas/exploracion_fisica', [ApiExpliracionFisica::class, 'getExploracionFisica']);

Route::middleware(['auth:sanctum'])->delete('/historias_clinicas/exploracion_fisica/delete', [ApiExpliracionFisica::class, 'deleteContent']);

// Protocolos
Route::middleware(['auth:sanctum'])->post('/protocolo/store', [ApiProtocolo::class, 'store']);
Route::middleware(['auth:sanctum'])->post('/protocolo/update', [ApiProtocolo::class, 'update']);

Route::middleware(['auth:sanctum'])->post('/protocolo/comentarios/store', [ApiComentarios::class, 'store']);
Route::middleware(['auth:sanctum'])->post('/protocolo/asignar', [ApiProtocolo::class, 'asignarProtocolo']);
Route::middleware(['auth:sanctum'])->delete('/protocolo/ejercicio', [ApiProtocolo::class, 'deleteEjercicio']);

Route::middleware(['auth:sanctum'])->get('/protocolo', [ApiProtocolo::class, 'getProtocolo']);
Route::middleware(['auth:sanctum'])->get('/protocolos', [ApiProtocolo::class, 'getProtocolos']);

Route::middleware(['auth:sanctum'])->get('/protocolo/comentarios', [ApiComentarios::class, 'getComentario']);

// Payment Module
Route::middleware(['auth:sanctum'])->post('payments/pay', [PaymentController::class, 'pay'])->name('pay');

Route::middleware(['auth:sanctum'])->get('payments/approval', [PaymentController::class, 'approval'])->name('approval');

Route::middleware(['auth:sanctum'])->get('payments/cancelled', [PaymentController::class, 'cancelled'])->name('cancelled');

Route::prefix('subscribe')->name('subscribe.')->group(function () {
    Route::get('/', 'SubscriptionController@show')
        ->name('show');

    Route::post('/', 'SubscriptionController@store')
        ->name('store');

    Route::get('/approval', 'SubscriptionController@approval')
        ->name('approval');

    Route::get('/cancelled', 'SubscriptionController@cancelled')
        ->name('cancelled');
});
