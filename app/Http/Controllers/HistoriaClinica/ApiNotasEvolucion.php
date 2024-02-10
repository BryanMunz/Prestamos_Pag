<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\NotasEvolucion;
use Illuminate\Http\Request;

class ApiNotasEvolucion extends Controller
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
            'notas' => ['required', 'max:499']
        ]);

        // // Busca el registro existente por historia_clinica_id
        $notas = NotasEvolucion::where('historia_clinica_id', $request->id_historia_clinica)->first();

        // Si no existe un registro, crea uno nuevo; de lo contrario, actualiza los datos
        if (!$notas) {
            $notas = new NotasEvolucion;
            $notas->historia_clinica_id = $request->id_historia_clinica;
        }

        // Actualiza los campos si se proporcionan en la solicitud
        if ($request->notas) $notas->notas_evolucion = $request->notas;

        $notas->save();


        return response()->json(['message' => $request->all()], 201);
    }

    public function get($id)
    {
        $historia = NotasEvolucion::where('historia_clinica_id', $id);

        if ($historia->first()) return $historia->first();

    }
}
