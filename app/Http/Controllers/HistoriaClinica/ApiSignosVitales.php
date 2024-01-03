<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\SignosVitales;
use Illuminate\Http\Request;

class ApiSignosVitales extends Controller
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
            'frecuencia_cardiaca' => ['required','numeric'],
            'temperatura' => ['required','numeric'],
            'saturacion_oxigeno' => ['required','numeric'],
            'frecuencia_respiratoria' => ['required','numeric'],
            'presion_arterial' => ['required','numeric'],
        ]);

        SignosVitales::create([
            "historia_clinica_id" => $request->id_historia_clinica,
            "frecuencia_cardiaca" => $request->frecuencia_cardiaca,
            "temperatura" => $request->temperatura,
            "saturacion_oxigeno" => $request->saturacion_oxigeno,
            'frecuencia_respiratoria' => $request->frecuencia_respiratoria,
            "presion_arterial" => $request->presion_arterial
        ]);

        return response()->json(['message' => 'Signos vitales guardada exitosamente'], 201);
    }

    public function get($id)
    {
        $historia = SignosVitales::where('historia_clinica_id', $id);

        if ($historia->first()) return $historia->first();

    }
}
