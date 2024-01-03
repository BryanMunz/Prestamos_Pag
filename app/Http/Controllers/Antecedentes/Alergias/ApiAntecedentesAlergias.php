<?php

namespace App\Http\Controllers\Antecedentes\Alergias;

use App\Http\Controllers\Controller;
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


    public function getAlergias(Request $request)
    {
        $request->validate([
            'id_paciente' => ['required']
        ]);
        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();
        $antecedentesAlergias = AntecedentesAlergias::find($antecedentes->antecedentes_alergias_id);
        return $antecedentesAlergias;
    }
}
