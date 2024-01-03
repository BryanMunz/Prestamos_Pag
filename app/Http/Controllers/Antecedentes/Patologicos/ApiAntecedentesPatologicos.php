<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Antecedentes\Patologicos\Tiroides as PatologicosTiroides;
use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Antecedentes;
use App\Models\Antecedentes\Patologicos\AntecedentesPatologicos;
use Illuminate\Http\Request;

class ApiAntecedentesPatologicos extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateHipertension(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesHipertension = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $hipertension = new ApiHipertension;
        $hipertension->store($antecedentesHipertension->hipertension_id, $request->respuesta);

        return response()->json(['message' => 'Alergia creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateHospitalizacion(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesHospitalizacion = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $hospitalizacion = new Hospitalizacion;
        $hospitalizacion->store($antecedentesHospitalizacion->hospitalizacion_previa_id, $request->respuesta);

        return response()->json(['message' => 'Hospitalizacion creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateCirugias(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesCirugias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $cirugias = new CirugiasPrevias;
        $cirugias->store($antecedentesCirugias->cirugias_previas_id, $request->respuesta);

        return response()->json(['message' => 'Cirugias creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateDiabetes(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesCirugias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $diabetes = new Diabetes;
        $diabetes->store($antecedentesCirugias->diabetes_id, $request->respuesta);

        return response()->json(['message' => 'Cirugias creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateTiroides(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesTiroides = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $tiroides = new PatologicosTiroides;
        $tiroides->store($antecedentesTiroides->tiroides_id, $request->respuesta);

        return response()->json(['message' => 'Tiroides creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateHipotension(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $patologias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $patologia = new Hipotension;
        $patologia->store($patologias->hipotension_id, $request->respuesta);

        return response()->json(['message' => 'Traumatismo creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateCardiopatias(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $patologias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $patologia = new CardioPatias;
        $patologia->store($patologias->cardiopatias_id, $request->respuesta);

        return response()->json(['message' => 'Cardiopatia creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateTraumatismo(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $patologias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $patologia = new Traumatismo;
        $patologia->store($patologias->traumatismo_id, $request->respuesta);

        return response()->json(['message' => 'Traumatismo creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateCancer(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $patologias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $patologia = new Cancer;
        $patologia->store($patologias->cancer_id, $request->respuesta);

        return response()->json(['message' => 'Cancer creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updatePatologiasRespiratorias(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $patologias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $patologia = new Respiratorias;
        $patologia->store($patologias->patologias_respiratorias_id, $request->respuesta);

        return response()->json(['message' => 'Patologias respiratorias creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateGastrointestinales(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $patologias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $patologia = new Gastrointestinales;
        $patologia->store($patologias->gastrointestinales_id, $request->respuesta);

        return response()->json(['message' => 'Patologia gastrointestinales creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateOtrosPatologicos(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $patologias = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $patologia = new OtrosPatologicos;
        $patologia->store($patologias->otros_patologicos_id, $request->respuesta);

        return response()->json(['message' => 'Otros patologicos creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateDescripciones(Request $request)
    {
        $request->validate([
            'id_paciente' => ['required'],
            'hipertension' => ['max:599'],
            'hospitalizacion' => ['max:599'],
            'cirugias' => ['max:599'],
            'diabetes' => ['max:599'],
            'tiroides' => ['max:599'],
            'hipotension' => ['max:599'],
            'cardiopatias' => ['max:599'],
            'traumatismo' => ['max:599'],
            'cancer' => ['max:599'],
            'respiratorias' => ['max:599'],
            'gastrointestinales' => ['max:599'],
            'otros' => ['max:599'],
        ]);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesPatologicos = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);

        $Hipertension = new ApiHipertension;
        $Hipertension->store($antecedentesPatologicos->hipertension_id, null, $request->hipertension);

        $Hospitalizacion = new Hospitalizacion;
        $Hospitalizacion->store($antecedentesPatologicos->hospitalizacion_previa_id, null, $request->hospitalizacion);

        $Cirugias = new CirugiasPrevias;
        $Cirugias->store($antecedentesPatologicos->cirugias_previas_id, null, $request->cirugias);

        $Diabetes = new Diabetes;
        $Diabetes->store($antecedentesPatologicos->diabetes_id, null, $request->diabetes);

        $Tiroides = new PatologicosTiroides;
        $Tiroides->store($antecedentesPatologicos->tiroides_id, null, $request->tiroides);

        $Hipotension = new Hipotension;
        $Hipotension->store($antecedentesPatologicos->hipotension_id, null, $request->hipotension);

        $Cardiopatia = new CardioPatias;
        $Cardiopatia->store($antecedentesPatologicos->cardiopatias_id, null, $request->cardiopatias);

        $Traumatismo = new Traumatismo;
        $Traumatismo->store($antecedentesPatologicos->traumatismo_id, $request->traumatismo);

        $Cancer = new Cancer;
        $Cancer->store($antecedentesPatologicos->cancer_id, null, $request->cancer);

        $Respiratorias = new Respiratorias;
        $Respiratorias->store($antecedentesPatologicos->patologias_respiratorias_id, null, $request->respiratorias);

        $Gastrointestinales = new Gastrointestinales;
        $Gastrointestinales->getGastrointestinales($antecedentesPatologicos->gastrointestinales_id, null, $request->gastrointestinales);

        $Otros = new OtrosPatologicos;
        $Otros->store($antecedentesPatologicos->otros_patologicos_id, null, $request->otros);

        return response()->json(['message' => 'Se modificaron correctamente'], 201);
    }

    public function getAntecedentesPatologicos(Request $request)
    {
        $rules = [
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesPatologicos = AntecedentesPatologicos::find($antecedentes->antecedentes_patologicos_id);


        $Hipertension = new ApiHipertension;
        $hipertension = $Hipertension->getHipertencion($antecedentesPatologicos->hipertension_id);

        $Hospitalizacion = new Hospitalizacion;
        $hospitalizacion = $Hospitalizacion->getHospitalizacion($antecedentesPatologicos->hospitalizacion_previa_id);

        $Cirugias = new CirugiasPrevias;
        $cirugias = $Cirugias->getCirugias($antecedentesPatologicos->cirugias_previas_id);

        $Diabetes = new Diabetes;
        $diabetes = $Diabetes->getDiabetes($antecedentesPatologicos->diabetes_id);

        $Tiroides = new PatologicosTiroides;
        $tiroides = $Tiroides->getTiroides($antecedentesPatologicos->tiroides_id);

        $Hipotension = new Hipotension;
        $hipotension = $Hipotension->getHipotension($antecedentesPatologicos->hipotension_id);

        $Cardiopatia = new CardioPatias;
        $cardiopatia = $Cardiopatia->getCardiopatias($antecedentesPatologicos->cardiopatias_id);

        $Traumatismo = new Traumatismo;
        $traumatismo = $Traumatismo->getTraumatismo($antecedentesPatologicos->traumatismo_id);

        $Cancer = new Cancer;
        $cancer = $Cancer->getCancer($antecedentesPatologicos->cancer_id);

        $Respiratorias = new Respiratorias;
        $respiratorias = $Respiratorias->getRespiratorias($antecedentesPatologicos->patologias_respiratorias_id);

        $Gastrointestinales = new Gastrointestinales;
        $gastrointestinales = $Gastrointestinales->getGastrointestinales($antecedentesPatologicos->gastrointestinales_id);

        $Otros = new OtrosPatologicos;
        $otros = $Otros->getOtroPatologicos($antecedentesPatologicos->otros_patologicos_id);

        return [
            'hipertencion' => $hipertension,
            'hospitalizacion_previa' => $hospitalizacion,
            'cirugias_previas' => $cirugias,
            'diabetes' => $diabetes,
            'tiroides' => $tiroides,
            'traumatismo' => $hipotension,
            'cardiopatias' => $cardiopatia,
            'traumatismo' => $traumatismo,
            'cancer' => $cancer,
            'respiratorias' => $respiratorias,
            'gastrointestinales' => $gastrointestinales,
            'otros' => $otros
        ];
    }
}
