<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\Traslado;
use Illuminate\Http\Request;

class ApiTraslado extends Controller
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
            'independiente' => ['max:3'],
            'auxiliares' => ['max:3'],
            'silla_ruedas' => ['max:3'],
            'camilla' => ['max:3'],
            'baston' => ['max:3'],
            'muletas' => ['max:3']
        ]);

        // // Busca el registro existente por historia_clinica_id
        $traslado = Traslado::where('historia_clinica_id', $request->id_historia_clinica)->first();

        // Si no existe un registro, crea uno nuevo; de lo contrario, actualiza los datos
        if (!$traslado) {
            $traslado = new Traslado;
            $traslado->historia_clinica_id = $request->id_historia_clinica;
        }

        // Actualiza los campos si se proporcionan en la solicitud
        if ($request->independiente) $traslado->independiente = $request->independiente;
        if ($request->auxiliares) $traslado->con_auxiliares = $request->auxiliares;
        if ($request->silla_ruedas) $traslado->silla_ruedas = $request->silla_ruedas;
        if ($request->camilla) $traslado->camilla = $request->camilla;
        if ($request->baston) $traslado->baston = $request->baston;
        if ($request->muletas) $traslado->baston = $request->muletas;

        $traslado->save();


        return response()->json(['message' => $request->all()], 201);
    }

    public function get($id)
    {
        $historia = Traslado::where('historia_clinica_id', $id);

        if ($historia->first()) return $historia->first();

    }
}
