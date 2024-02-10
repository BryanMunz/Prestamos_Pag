<?php

namespace App\Http\Controllers\HistoriaClinica;

use App\Http\Controllers\Controller;
use App\Models\HistoriaClinica;
use Illuminate\Http\Request;

class ApiHistoriaClinica extends Controller
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
            'motivos' => ['required', 'max:599'],
            'id_paciente' => ['required', 'numeric'],
            'cita_subsecuente' => ['max:499']
        ]);

        $historiaClinica = HistoriaClinica::create([
            "motivos" => $request->motivos,
            "paciente_id" => $request->id_paciente,
            'cita_subsecuente' => $request->cita_subsecuente
        ]);

        return response()->json(['message' => 'Historia Clinica guardada exitosamente', 'id_historia_clinica' => $historiaClinica->id], 201);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function getHistoriasClinicas(Request $request)
    {
        $request->validate([
            'id_paciente' => ['required']
        ]);



        $historiaClinica = HistoriaClinica::where('paciente_id', $request->id_paciente);

        if ($historiaClinica->first()) {
            $historiaClinica = $historiaClinica->first();
            $fechaDeCreacion = $historiaClinica->created_at;

            $fechaFormateada = $fechaDeCreacion->format('d, M, Y');
            $historiaClinicaArray = $historiaClinica->toArray();

            $resultado = array_merge($historiaClinicaArray, ['fecha' => $fechaFormateada]);
            // return $resultado;
            return response()->json([$resultado], 200);
        }
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function getDatosHistoriaClinicaS(Request $request)
    {
        $request->validate(['id' => ['required']]);

        $Somatometria = new ApiSomatometria;
        $somatometria = $Somatometria->get($request->id);

        $SignosVitales = new ApiSignosVitales();
        $signosVitales = $SignosVitales->get($request->id);

        $Marcha = new ApiMarcha();
        $marcha = $Marcha->get($request->id);

        $Traslado = new ApiTraslado();
        $traslado = $Traslado->get($request->id);

        $Motivos = new ApiMotivos();
        $motivos = $Motivos->get($request->id);

        $Diagnostico = new ApiDiagnosticoTerapeutico();
        $diagnostico = $Diagnostico->get($request->id);

        $Notas = new ApiNotasEvolucion();
        $notas = $Notas->get($request->id);

        $ExploracionFisica = new ApiExpliracionFisica();
        $exploracionFisica = $ExploracionFisica->getExploracionFisica($request->id);


        return response()->json([
            'somatometria' => $somatometria,
            'signos_vitales' => $signosVitales,
            'marcha' => $marcha,
            'traslado' => $traslado,
            'motivos' => $motivos,
            'diagnostico' => $diagnostico,
            'notas' => $notas,
            'exploracion_fisica' => $exploracionFisica
        ], 200);
    }

}
