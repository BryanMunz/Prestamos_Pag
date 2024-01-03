<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\DiagnosticoTerapeutica;
use Illuminate\Http\Request;

class ApiDiagnosticoTerapeutico extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_historia_clinica' => ['required', 'numeric'],
            'observaciones_clinicas' => ['required', 'max:499'],
            'objetivos_fisioterapeuticos' => ['required', 'max:499'],
            'analisis' => ['required', 'max:499'],
            'diagnostico_medico' => ['required', 'max:499'],
            'diagnostico_fisioterapeutico' => ['required', 'max:499'],
            'plan_tratamiento' => ['required', 'max:499'],
        ]);

        // // Busca el registro existente por historia_clinica_id
        $diagnostico = DiagnosticoTerapeutica::where('historia_clinica_id', $request->id_historia_clinica)->first();

        // Si no existe un registro, crea uno nuevo; de lo contrario, actualiza los datos
        if (!$diagnostico) {
            $diagnostico = new DiagnosticoTerapeutica;
            $diagnostico->historia_clinica_id = $request->id_historia_clinica;
        }

        // Actualiza los campos si se proporcionan en la solicitud
        if ($request->observaciones_clinicas) $diagnostico->observaciones_clinicas = $request->observaciones_clinicas;

        if ($request->objetivos_fisioterapeuticos) $diagnostico->objetivos_fisioterapeuticos = $request->objetivos_fisioterapeuticos;

        if ($request->analisis) $diagnostico->analisis = $request->analisis;

        if ($request->diagnostico_medico) $diagnostico->diagnostico_medico = $request->diagnostico_medico;

        if ($request->diagnostico_fisioterapeutico) $diagnostico->diagnostico_fisioterapeutico = $request->diagnostico_fisioterapeutico;

        if ($request->plan_tratamiento) $diagnostico->plan_tratamiento = $request->plan_tratamiento;

        $diagnostico->save();


        return response()->json(['message' => $request->all()], 201);
    }

    public function get($id)
    {
        $historia = DiagnosticoTerapeutica::where('historia_clinica_id', $id);

        if ($historia->first()) return $historia->first();
    }
}
