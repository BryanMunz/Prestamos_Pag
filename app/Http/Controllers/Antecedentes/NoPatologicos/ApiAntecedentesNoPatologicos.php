<?php

namespace App\Http\Controllers\Antecedentes\NoPatologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Antecedentes;
use App\Models\Antecedentes\NoPatologicos\NoPatologicos;
use Illuminate\Http\Request;

class ApiAntecedentesNoPatologicos extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateActividadFisica(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);

        $antecedente = new ActividadFisicaConotroller;
        $antecedente->store($antecedentesNoPatologicos->actividad_fisica_id, $request->respuesta);

        return response()->json(['message' => 'Actividad fisica creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateTabaquismo(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);

        $antecedente = new TabaquismoController;
        $antecedente->store($antecedentesNoPatologicos->tabaquismo_id, $request->respuesta);

        return response()->json(['message' => 'Tabaquismo creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateAlcohol(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);

        $antecedente = new AlcoholismoController;
        $antecedente->store($antecedentesNoPatologicos->alcoholismo_id, $request->respuesta);

        return response()->json(['message' => 'Tabaquismo creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateDrogas(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);

        $antecedente = new DrogasController;
        $antecedente->store($antecedentesNoPatologicos->drogas_id, $request->respuesta);

        return response()->json(['message' => 'Drogas creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateVacunas(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);

        $antecedente = new VacunasRecientesController;
        $antecedente->store($antecedentesNoPatologicos->vacunas_recientes_id, $request->respuesta);

        return response()->json(['message' => 'Vacunas recientes creado'], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateOtrosNoPatologicos(Request $request)
    {
        $rules = [
            'respuesta' => ['required', 'max:3'],
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);

        $antecedente = new OtrosNoPatologicosController;
        $antecedente->store($antecedentesNoPatologicos->otros_no_patologicos_id, $request->respuesta);

        return response()->json(['message' => 'Otros creado'], 201);
    }

    public function updateDescripciones(Request $request)
    {
        $rules = [
            'id_paciente' => ['required'],
            'actividad_fisica' => ['max:599'],
            'tabaquismo' => ['max:599'],
            'alcoholismo' => ['max:599'],
            'drogas' => ['max:599'],
            'vacunas_recientes' => ['max:599'],
            'otros' => ['max:599'],
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);


        $Actividad_Fisica = new ActividadFisicaConotroller;
        $Actividad_Fisica->store($antecedentesNoPatologicos->actividad_fisica_id, null, $request->actividad_fisica);

        $Tabaquismo = new TabaquismoController;
        $Tabaquismo->store($antecedentesNoPatologicos->tabaquismo_id, null, $request->tabaquismo);

        $Alcoholismo = new AlcoholismoController;
        $Alcoholismo->store($antecedentesNoPatologicos->alcoholismo_id, null, $request->alcoholismo);

        $Drogas = new DrogasController;
        $Drogas->store($antecedentesNoPatologicos->drogas_id, null, $request->drogas);

        $Vacunas = new VacunasRecientesController;
        $Vacunas->store($antecedentesNoPatologicos->vacunas_recientes_id, null, $request->vacunas_recientes);

        $Otros = new OtrosNoPatologicosController;
        $Otros->store($antecedentesNoPatologicos->otros_no_patologicos_id, null, $request->otros);

    }

    public function getAntecedentesNoPatologicos(Request $request)
    {
        $rules = [
            'id_paciente' => ['required']
        ];

        $this->validate($request, $rules);

        $antecedentes = Antecedentes::where('paciente_id', $request->id_paciente)->first();

        $antecedentesNoPatologicos = NoPatologicos::find($antecedentes->antecedentes_no_patologicos_id);


        $Actividad_Fisica = new ActividadFisicaConotroller;
        $actividad_fisica = $Actividad_Fisica->getActividadFisica($antecedentesNoPatologicos->actividad_fisica_id);

        $Tabaquismo = new TabaquismoController;
        $tabaquismo = $Tabaquismo->getTabaquismo($antecedentesNoPatologicos->tabaquismo_id);

        $Alcoholismo = new AlcoholismoController;
        $alcoholismo = $Alcoholismo->getAlcoholismo($antecedentesNoPatologicos->alcoholismo_id);

        $Drogas = new DrogasController;
        $drogas = $Drogas->getDrogas($antecedentesNoPatologicos->drogas_id);

        $Vacunas = new VacunasRecientesController;
        $vacunas = $Vacunas->getVacunasRecientes($antecedentesNoPatologicos->vacunas_recientes_id);

        $Otros = new OtrosNoPatologicosController;
        $otros = $Otros->getOtrosNoPatologicos($antecedentesNoPatologicos->otros_no_patologicos_id);


        return [
            'actividad_fisica' => $actividad_fisica,
            'tabaquismo' => $tabaquismo,
            'alcoholismo' => $alcoholismo,
            'drogas' => $drogas,
            'vacunas_recientes' => $vacunas,
            'otros' => $otros
        ];
    }
}
