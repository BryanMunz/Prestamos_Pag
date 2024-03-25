<?php

namespace App\Http\Controllers\Antecedentes\Alergias;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Alergias\Alergias;
use App\Models\Antecedentes\Alergias\AntecedentesAlergias;
use App\Models\Antecedentes\Antecedentes;
use Illuminate\Http\Request;

class ApiAntecedentesAlergias extends Controller
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
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesAlergias = AntecedentesAlergias::find($antecedentes->antecedentes_alergias_id);

        $antecedentesAlergias->alergias = $request->respuesta;
        $antecedentesAlergias->save();

        return response()->json(['message' => 'Alergia creado'], 201);
    }

    public function storeAlergia(Request $request)
    {
        $request->validate([
            'id_paciente' => ['required', 'numeric'],
            'alergia' => ['required', 'string', 'max:250']
        ]);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesAlergias = AntecedentesAlergias::find($antecedentes->antecedentes_alergias_id);

        $antecedentesAlergias->alergias()->create([
            'nombre_alergia' => $request->alergia,
            'antecedentes_alergias_id' => $antecedentesAlergias->id
        ]);
        // $alergia = Alergias::create([
        //     'nombre_alergia' => $request->alergia,
        //     'antecedentes_alergias_id' => $antecedentesAlergias->id
        // ]);

        return response()->json(['message' => 'Alergia creado correctamente', 'alergia' => $antecedentesAlergias], 201);
    }

    public function getAlergias(Request $request)
    {
        $request->validate([
            'id_paciente' => ['required']
        ]);
        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        if ($antecedentes) {
            $antecedentesAlergias = AntecedentesAlergias::with('alergias')->find($antecedentes->antecedentes_alergias_id);
            return $antecedentesAlergias;
        }
    }

    public function updateAlergia(Request $request)
    {
        $request->validate([
            'id_alergia' => ['required', 'numeric'],
            'alergia' => ['required', 'string', 'max:250']
        ]);

        $alergia = Alergias::find($request->id_alergia);

        if ($alergia) {
            $alergia->nombre_alergia = $request->alergia;
            $alergia->save();
            return response()->json(['message' => 'Alergia actualizada correctamente'], 200);
        } // Devolver una respuesta exitosa
        else {
            // Si la alergia no existe, devolver un mensaje de error
            return response()->json(['message' => 'La alergia no existe'], 404);
        }
    }

    public function deleteAlergia(Request $request)
    {
        $request->validate([
            'id_alergia' => ['required', 'numeric']
        ]);

        $alergia = Alergias::find($request->id_alergia);

        if ($alergia) {
            $alergia->delete();
            return response()->json(['message' => 'Alergia eliminada correctamente'], 200);
        } // Devolver una respuesta exitosa
        else {
            // Si la alergia no existe, devolver un mensaje de error
            return response()->json(['message' => 'La alergia no existe'], 404);
        }
    }
}