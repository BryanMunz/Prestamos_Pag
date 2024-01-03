<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\Somatometria;
use Illuminate\Http\Request;

class ApiSomatometria extends Controller
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
            'grasa_corporal' => ['required', 'numeric'],
            'estatura' => ['required', 'numeric'],
            'imc' => ['required', 'numeric'],
            'masa_muscular' => ['required', 'numeric'],
            'peso' => ['required', 'numeric'],
        ]);

        Somatometria::create([
            "historia_clinica_id" => $request->id_historia_clinica,
            "grasa_corporal" => $request->grasa_corporal,
            "estatura" => $request->estatura,
            "imc" => $request->imc,
            'masa_muscular' => $request->masa_muscular,
            "peso" => $request->peso
        ]);

        return response()->json(['message' => 'Somatomatria guardada exitosamente'], 201);
    }

    public function get($id)
    {
        return Somatometria::where('historia_clinica_id', $id)->first();
        // return $id;

    }
}
