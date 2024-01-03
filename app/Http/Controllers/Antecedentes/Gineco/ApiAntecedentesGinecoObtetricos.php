<?php

namespace App\Http\Controllers\Antecedentes\Gineco;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Antecedentes;
use App\Models\Antecedentes\Gineco\CancerUterino;
use App\Models\Antecedentes\Gineco\Gineco;
use App\Models\Antecedentes\Gineco\Menarca;
use Illuminate\Http\Request;

class ApiAntecedentesGinecoObtetricos extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateEmbarazo(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesGineco = Gineco::find($antecedentes->antecedentes_gineco_id);

        $antecedente = new EmbarazoController;
        $antecedente->store($antecedentesGineco->embarazo_id, $request->respuesta);

        return response()->json(['message' => 'Embarazo creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateCancerUterino(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesGineco = Gineco::find($antecedentes->antecedentes_gineco_id);

        $antecedente = new CancerUterinoController;
        $antecedente->store($antecedentesGineco->cancer_uterino_id, $request->respuesta);

        return response()->json(['message' => 'Cancer uterino creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateOtroGineco(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesGineco = Gineco::find($antecedentes->antecedentes_gineco_id);

        $antecedente = new OtrosGinecoController;
        $antecedente->store($antecedentesGineco->otros_gineco_id, $request->respuesta);

        return response()->json(['message' => 'Otros creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateMenarca(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'date'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesGineco = Gineco::find($antecedentes->antecedentes_gineco_id);

        $antecedente = new FechaMenarcaController;
        $antecedente->store($antecedentesGineco->menarca_id, $request->respuesta);

        return response()->json(['message' => 'Fecha menarca creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateUltimaMestruacion(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'date'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesGineco = Gineco::find($antecedentes->antecedentes_gineco_id);

        $antecedente = new UltimaMestruacionController;
        $antecedente->store($antecedentesGineco->ultima_mestruacion_id, $request->respuesta);

        return response()->json(['message' => 'Ultima mestruacion creado'], 201);
    }

    public function updateDescripciones(Request $request)
    {
        $rules = [
            'id_paciente' => ['required'],
            'embarazo' => ['max:599'],
            'cancer_uterino' => ['max:599'],
            'otros' => ['max:599']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesGineco = Gineco::find($antecedentes->antecedentes_gineco_id);


        $Embarazo = new EmbarazoController;
        $Embarazo->store($antecedentesGineco->embarazo_id, null, $request->embarazo);
        $CancerUterino = new CancerUterinoController;
        $CancerUterino->store($antecedentesGineco->cancer_uterino_id, null, $request->cancer_uterino);
        $Otros = new OtrosGinecoController;
        $Otros->store($antecedentesGineco->otros_gineco_id, null, $request->otros);
    }

    public function getAntecedentesGineco(Request $request)
    {
        $rules = [
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesGineco = Gineco::find($antecedentes->antecedentes_gineco_id);


        $Embarazo = new EmbarazoController;
        $embarazo = $Embarazo->getEmbarazo($antecedentesGineco->embarazo_id);

        $Menarca = new FechaMenarcaController;
        $menarca = $Menarca->getFechaMenarca($antecedentesGineco->menarca_id);

        $CancerUterino = new CancerUterinoController;
        $cancerUterino = $CancerUterino->getCancerUterino($antecedentesGineco->cancer_uterino_id);

        $UltimaMestruacion = new UltimaMestruacionController;
        $ultimaMestruacion = $UltimaMestruacion->getUltimaMestruacion($antecedentesGineco->ultima_mestruacion_id);

        $Otros = new OtrosGinecoController;
        $otros = $Otros->getOtrosGineco($antecedentesGineco->otros_gineco_id);



        return [
            'embarazo' => $embarazo,
            'fecha_menarca' => $menarca,
            'cancer_uterino' => $cancerUterino,
            'ultima_mestruacion' => $ultimaMestruacion,
            'otros' => $otros,
        ];
    }
}
