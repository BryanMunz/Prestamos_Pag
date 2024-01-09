<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica\ExploracionClinica;
use Illuminate\Http\Request;

class ApiExpliracionFisica extends Controller
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
            'Cabeza_Parte_Frontal' => ['max:499'],
            'Cabeza_Parte_Posterior' => ['max:499'],
            'Cuello_Parte_Frontal' => ['max:499'],
            'Cuello_Parte_Posterior' => ['max:499'],
            'Extremidad_Superior_Izquierda_Parte_Frontal' => ['max:499'],
            'Extremidad_Superior_Izquierda_Parte_Posterior' => ['max:499'],
            'Extremidad_Superior_Derecha_Parte_Frontal' => ['max:499'],
            'Extremidad_Superior_Derecha_Parte_Posterior' => ['max:499'],
            'Tronco_Parte_Frontal' => ['max:499'],
            'Tronco_Parte_Posterior' => ['max:499'],
            'Extremidad_Inferior_Izquierda_Parte_Frontal' => ['max:499'],
            'Extremidad_Inferior_Izquierda_Parte_Posterior' => ['max:499'],
            'Extremidad_Inferior_Derecha_Parte_Frontal' => ['max:499'],
            'Extremidad_Inferior_Derecha_Parte_Posterior' => ['max:499'],
            'Zona_Pelvica_Frontal' => ['max:499'],
            'Zona_Pelvica_Posterior' => ['max:499'],
        ]);

        // // Busca el registro existente por historia_clinica_id
        $diagnostico = ExploracionClinica::where('historia_clinica_id', $request->id_historia_clinica)->first();

        // Si no existe un registro, crea uno nuevo; de lo contrario, actualiza los datos
        if (!$diagnostico) {
            $diagnostico = new ExploracionClinica;
            $diagnostico->historia_clinica_id = $request->id_historia_clinica;
        }

        // Actualiza los campos si se proporcionan en la solicitud
        if ($request->Cabeza_Parte_Frontal) $diagnostico->cabeza_parte_frontal = $request->Cabeza_Parte_Frontal;

        if ($request->Cabeza_Parte_Posterior) $diagnostico->cabeza_parte_posterior = $request->Cabeza_Parte_Posterior;

        if ($request->Cuello_Parte_Frontal) $diagnostico->cuello_parte_frontal = $request->Cuello_Parte_Frontal;

        if ($request->Cuello_Parte_Posterior) $diagnostico->cuello_parte_posterior = $request->Cuello_Parte_Posterior;

        if ($request->Extremidad_Superior_Izquierda_Parte_Frontal) $diagnostico->extremidad_superior_izquierda_parte_frontal = $request->Extremidad_Superior_Izquierda_Parte_Frontal;

        if ($request->Extremidad_Superior_Izquierda_Parte_Posterior) $diagnostico->extremidad_superior_izquierda_parte_posterior = $request->Extremidad_Superior_Izquierda_Parte_Posterior;

        if ($request->Extremidad_Superior_Derecha_Parte_Frontal) $diagnostico->extremidad_superior_derecha_parte_frontal = $request->Extremidad_Superior_Derecha_Parte_Frontal;

        if ($request->Extremidad_Superior_Derecha_Parte_Posterior) $diagnostico->extremidad_superior_derecha_parte_posterior = $request->Extremidad_Superior_Derecha_Parte_Posterior;

        if ($request->Tronco_Parte_Frontal) $diagnostico->tronco_parte_frontal = $request->Tronco_Parte_Frontal;

        if ($request->Tronco_Parte_Posterior) $diagnostico->tronco_parte_posterior = $request->Tronco_Parte_Posterior;

        if ($request->Extremidad_Inferior_Izquierda_Parte_Frontal) $diagnostico->extremidad_inferior_izquierda_parte_frontal = $request->Extremidad_Inferior_Izquierda_Parte_Frontal;

        if ($request->Extremidad_Inferior_Izquierda_Parte_Posterior) $diagnostico->extremidad_inferior_izquierda_parte_posterior = $request->Extremidad_Inferior_Izquierda_Parte_Posterior;

        if ($request->Extremidad_Inferior_Derecha_Parte_Frontal) $diagnostico->extremidad_inferior_derecha_parte_frontal = $request->Extremidad_Inferior_Derecha_Parte_Frontal;

        if ($request->Extremidad_Inferior_Derecha_Parte_Posterior) $diagnostico->extremidad_inferior_derecha_parte_posterior = $request->Extremidad_Inferior_Derecha_Parte_Posterior;

        if ($request->Zona_Pelvica_Frontal) $diagnostico->zona_pelvica_frontal = $request->Zona_Pelvica_Frontal;

        if ($request->Zona_Pelvica_Posterior) $diagnostico->zona_pelvica_posterior = $request->Zona_Pelvica_Posterior;

        $diagnostico->save();


        return response()->json(['message' => $request->all()], 201);
    }
}
