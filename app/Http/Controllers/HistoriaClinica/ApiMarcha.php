<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\Marcha;
use Illuminate\Http\Request;

class ApiMarcha extends Controller
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
            'claudicante' => ['max:3'],
            'auxiliares' => ['max:3'],
            'espastica' => ['max:3'],
            'ataxica' => ['max:3']
        ]);

        // // Busca el registro existente por historia_clinica_id
        $marcha = Marcha::where('historia_clinica_id', $request->id_historia_clinica)->first();

        // Si no existe un registro, crea uno nuevo; de lo contrario, actualiza los datos
        if (!$marcha) {
            $marcha = new Marcha;
            $marcha->historia_clinica_id = $request->id_historia_clinica;
        }

        // Actualiza los campos si se proporcionan en la solicitud
        $marcha->claudicante = $request->claudicante !== null ? $request->claudicante : null;
        if ($request->auxiliares) $marcha->con_auxiliares = $request->auxiliares;
        if ($request->espastica) $marcha->auxiliares = $request->espastica;
        if ($request->ataxica) $marcha->espastica = $request->ataxica;

        $marcha->save();


        return response()->json(['message' => $request->all()], 201);
    }

    public function get($id)
    {
        $historia = Marcha::where('historia_clinica_id', $id);

        if ($historia->first()) return $historia->first();
    }
}
