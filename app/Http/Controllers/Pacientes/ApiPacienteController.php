<?php

namespace App\Http\Controllers\Pacientes;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Alergias\AntecedentesAlergias;
use App\Models\Antecedentes\Antecedentes;
use App\Models\Antecedentes\Gineco\CancerUterino;
use App\Models\Antecedentes\Gineco\Embarazos;
use App\Models\Antecedentes\Gineco\Gineco;
use App\Models\Antecedentes\Gineco\Menarca;
use App\Models\Antecedentes\Gineco\OtrosGineco;
use App\Models\Antecedentes\Gineco\UltimaMestruacion;
use App\Models\Antecedentes\NoPatologicos\ActividadFisica;
use App\Models\Antecedentes\NoPatologicos\Alcoholismo;
use App\Models\Antecedentes\NoPatologicos\Drogas;
use App\Models\Antecedentes\NoPatologicos\NoPatologicos;
use App\Models\Antecedentes\NoPatologicos\OtrosNoPatologicos;
use App\Models\Antecedentes\NoPatologicos\Tabaquismo;
use App\Models\Antecedentes\NoPatologicos\VacunasRecientes;
use App\Models\Antecedentes\Patologicos\AntecedentesPatologicos;
use App\Models\Antecedentes\Patologicos\Cancer;
use App\Models\Antecedentes\Patologicos\Cardiopatias;
use App\Models\Antecedentes\Patologicos\CirugiasPrevias;
use App\Models\Antecedentes\Patologicos\Diabetes;
use App\Models\Antecedentes\Patologicos\Hipertension;
use App\Models\Antecedentes\Patologicos\Hipotension;
use App\Models\Antecedentes\Patologicos\HospitalizacionPrevia;
use App\Models\Antecedentes\Patologicos\OtrosPatologicos;
use App\Models\Antecedentes\Patologicos\PatologiasGastrointestinales;
use App\Models\Antecedentes\Patologicos\PatologiasRespiratorias;
use App\Models\Antecedentes\Patologicos\Tiroides;
use App\Models\Antecedentes\Patologicos\Traumatismo;
use App\Models\Antecedentes\Peritanales\Peritanales;
use App\Models\User;
use Illuminate\Http\Request;

class ApiPacienteController extends Controller
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
            'nombre' => ['required', 'max:255'],
            'apellidos' => ['required', 'max:255'],
            'sexo' => ['required', 'max:1'],
            'fecha_nacimiento' => ['required'],
        ];
        
        $this->validate($request, $rules); 

        $paciente = User::create([
            'name' => $request->nombre,
            'email' => $request->email,
            'last_name' => $request->apellidos,
            'fecha_nacimiento' => $request->fecha_nacimiento,
            'num_telefono' => $request->telefono,
            'sexo' => $request->sexo,
            'rol_id' => 2,
            'wizard' => 1
        ]);


        Antecedentes::create([
            'paciente_id' => $paciente->id, 
            'antecedentes_alergias_id' => $this->createAlergias(),
            'antecedentes_patologicos_id' => $this->createPatologicos(),
            'antecedentes_no_patologicos_id' => $this->createNoPatologicos(),
            'antecedentes_gineco_id' => $this->createGineco(),
            'antecedentes_peritanales_id' => $this->createPeritanales()
        ]);

        return response()->json(['message' => 'Paciente creado'], 201);
    }

    public function delete($id)
    {
        $paciente = User::find($id);

        if (!$paciente) {
            return response()->json(['error' => 'Registro no encontrado'], 404);
        }

        $paciente->delete();

        return response()->json(['mensaje' => 'Registro eliminado con éxito']);
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function getPacientes(Request $request)
    {
        $order = $request->order;
        $filter = $request->filter;
        switch ($order) {
            case 'asc_nombre':
                $orderByField = 'name';
                $orderDirection = 'asc';
                break;
            case 'desc_nombre':
                $orderByField = 'name';
                $orderDirection = 'desc';
                break;
            case 'asc_fecha':
                $orderByField = 'fecha_nacimiento';
                $orderDirection = 'asc';
                break;
            case 'desc_fecha':
                $orderByField = 'fecha_nacimiento';
                $orderDirection = 'desc';
                break;
            default:
                $orderByField = 'name'; // Orden por nombre ascendente por defecto
                $orderDirection = 'asc';
                break;
        }

        $pacientes = \App\Models\User::where('rol_id', 2)
            ->orderBy($orderByField, $orderDirection)->with('ejercicios')
            ->get();

        $filterPaciente = [];
        switch ($filter) {
            case 'activo':
                foreach ($pacientes as $paciente) {
                    if (count($paciente->ejercicios) > 0) {
                        foreach ($paciente->ejercicios as $ejercicio) {
                            if ($ejercicio->pivot->status === 'activo') {
                                array_push($filterPaciente, $paciente);
                                break;
                            }
                        }
                    }
                }
                break;
            case 'finalizado':
                foreach ($pacientes as $paciente) {
                    if (count($paciente->ejercicios) > 0) {
                        foreach ($paciente->ejercicios as $ejercicio) {
                            if ($ejercicio->pivot->status === 'finalizado') {
                                array_push($filterPaciente, $paciente);
                                break;
                            }
                        }
                    }
                }
                break;
            case 'cancelado':
                foreach ($pacientes as $paciente) {
                    if (count($paciente->ejercicios) > 0) {
                        foreach ($paciente->ejercicios as $ejercicio) {
                            if ($ejercicio->pivot->status === 'cancelado') {
                                array_push($filterPaciente, $paciente);
                                break;
                            }
                        }
                    }
                }
                break;
            case 'sin plan':
                foreach ($pacientes as $paciente) {
                    if (count($paciente->ejercicios) === 0) {
                        array_push($filterPaciente, $paciente);
                    }
                }
                break;

            default:
                $filterPaciente = $pacientes;
                break;
        }
        return $filterPaciente;
    }

    private function createAlergias() {
        $antecedentesAlergias = AntecedentesAlergias::create([]);
        return $antecedentesAlergias->id;
    }   

    private function createPatologicos() {
        $hipertension = Hipertension::create([]);
        $hospitalizacionPrevia = HospitalizacionPrevia::create([]);
        $cirugisaPrevias = CirugiasPrevias::create([]);
        $diabetes = Diabetes::create([]);
        $tiroides = Tiroides::create([]);
        $hipotension = Hipotension::create([]);
        $cardiopatias = Cardiopatias::create([]);
        $traumatismo = Traumatismo::create([]);
        $cancer = Cancer::create([]);
        $patologiasRespiratorias = PatologiasRespiratorias::create([]);
        $gastrointestinales = PatologiasGastrointestinales::create([]);
        $otros = OtrosPatologicos::create([]);

        $antecedentesPatologicos = AntecedentesPatologicos::create([
            'hipertension_id' => $hipertension->id,
            'hospitalizacion_previa_id' => $hospitalizacionPrevia->id,
            'cirugias_previas_id' => $cirugisaPrevias->id,
            'diabetes_id' => $diabetes->id,
            'tiroides_id' => $tiroides->id,
            'hipotension_id' => $hipotension->id,
            'cardiopatias_id' => $cardiopatias->id,
            'traumatismo_id' => $traumatismo->id,
            'cancer_id' => $cancer->id,
            'patologias_respiratorias_id' => $patologiasRespiratorias->id,
            'gastrointestinales_id' => $gastrointestinales->id,
            'otros_patologicos_id' => $otros->id
        ]);
        return $antecedentesPatologicos->id;
    }

    public function createNoPatologicos() {
        $actividadFisica = ActividadFisica::create([]);
        $tabaquismo = Tabaquismo::create([]);
        $alcoholismo = Alcoholismo::create([]);
        $drogas = Drogas::create([]);
        $vacunas = VacunasRecientes::create([]);
        $otro = OtrosNoPatologicos::create([]);

        $antecedentesNoPatologicos = NoPatologicos::create([
            'actividad_fisica_id' => $actividadFisica->id,
            'tabaquismo_id' => $tabaquismo->id,
            'alcoholismo_id' => $alcoholismo->id,
            'drogas_id' => $drogas->id,
            'vacunas_recientes_id' => $vacunas->id,
            'otros_no_patologicos_id' => $otro->id
        ]);

        return $antecedentesNoPatologicos->id;
    }
    private function createGineco() {
        $embarazo = Embarazos::create([]);
        $menarca = Menarca::create([]);
        $cancer_uterino = CancerUterino::create([]);
        $ultima_mestruacion = UltimaMestruacion::create([]);
        $otros = OtrosGineco::create([]);

        $antecedentesGineco = Gineco::create([
            'embarazo_id' => $embarazo->id,
            'menarca_id' => $menarca->id,
            'cancer_uterino_id' => $cancer_uterino->id,
            'ultima_mestruacion_id' => $ultima_mestruacion->id,
            'otros_gineco_id' => $otros->id
        ]);

        return $antecedentesGineco->id;
    }

    private function createPeritanales() {
        $antecedentesPeritanales = Peritanales::create([]);
        return $antecedentesPeritanales->id;
    }
}
