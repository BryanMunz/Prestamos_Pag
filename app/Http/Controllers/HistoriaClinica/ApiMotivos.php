<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\Motivos;
use Illuminate\Http\Request;

class ApiMotivos extends Controller
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
            'motivos' => ['required','max:499']
        ]);

        // // Busca el registro existente por historia_clinica_id
        $motivo = Motivos::where('historia_clinica_id', $request->id_historia_clinica)->first();

        // Si no existe un registro, crea uno nuevo; de lo contrario, actualiza los datos
        if (!$motivo) {
            $motivo = new Motivos;
            $motivo->historia_clinica_id = $request->id_historia_clinica;
        }

        // Actualiza los campos si se proporcionan en la solicitud
        if ($request->motivos) $motivo->motivos = $request->motivos;

        $motivo->save();


        return response()->json(['message' => $request->all()], 201);
    }

    public function get($id)
    {
        $historia = Motivos::where('historia_clinica_id', $id);

        if ($historia->first()) return $historia->first();

    }
}
