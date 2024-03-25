<?php

namespace App\Http\Controllers\Pacientes;

use App\Http\Controllers\Controller;
use App\Mail\TrainingMail;
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
use GuzzleHttp\Client as GuzzleClient;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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

        $user = auth()->user();

        $input = '123456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ';

        $input_length = strlen($input);
        $random_string = '';
        for ($i = 0; $i < 8; $i++) {
            $random_character = $input[mt_rand(0, $input_length - 1)];
            $random_string .= $random_character;
        }

        $paciente = User::create([
            'name' => $request->nombre,
            'email' => $request->email,
            'last_name' => $request->apellidos,
            'fecha_nacimiento' => $request->fecha_nacimiento,
            'num_telefono' => $request->telefono,
            'sexo' => $request->sexo,
            'rol_id' => 2,
            'wizard' => 1,
            'password' => $random_string,
            'user_id' => $user->id
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

        $paciente->eliminado = true;
        $paciente->save();

        return response()->json(['mensaje' => 'Registro eliminado con éxito']);
    }

    public function getPaciente(Request $request)
    {
        $request->validate(['id_paciente' => ['required', 'numeric']]);

        $paciente = User::find($request->id_paciente);

        return response()->json(['paciente' => $paciente]);
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
        $user = auth()->user();
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

        $pacientes = \App\Models\User::where('rol_id', 2)->where('eliminado', false)->where('user_id', $user->id)
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

    private function createAlergias()
    {
        $antecedentesAlergias = AntecedentesAlergias::create([]);
        return $antecedentesAlergias->id;
    }

    private function createPatologicos()
    {
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

    public function createNoPatologicos()
    {
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
    private function createGineco()
    {
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

    private function createPeritanales()
    {
        $antecedentesPeritanales = Peritanales::create([]);
        return $antecedentesPeritanales->id;
    }

    public function sendMessage(Request $resquest, $id)
    {
        $paciente = User::where('id', '=', $id)->first();
        $user = auth()->user();

        if ($paciente->num_telefono != null) {
            $headers = [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer EAAKq4ezuZBB0BAI99yTOCaJxiG2HXAoHliJH9Uf81wEYbioWrYHcwdciuWhEZBJrTgUgontPDZAk5nR3qoIIPjp5bZAUnq4a4sNHSvVfWNm0MjwgaS5ZBstwF6GQVSPT3onpCFAMNwNovcUTi4HtT7pBKYhVcvVp3nTYsN400wTWkdJ5GIIyH'
            ];

            $client = new GuzzleClient([
                'headers' => $headers
            ]);

            $body = '{
                "messaging_product": "whatsapp",
                "to": "+52' . $paciente->num_telefono . '",
                "type": "template",
                "template": {
                    "name": "access_code",
                    "language": {
                        "code": "es_MX"
                    },
                    "components": [{
                        "type": "body",
                        "parameters": [
                                {
                                    "type": "text",
                                    "text": "Profesional en rehabilitación ' . $user->name . '",
                                },
                                {
                                    "type": "text",
                                    "text": "' . \Carbon\Carbon::parse($paciente->fecha_nacimiento)->format('Y') . '"
                                },
                                {
                                    "type": "text",
                                    "text": "' . $paciente->password . '"
                                }
                        ]
                    }]
                }
            }';

            try {
                $r = $client->request('POST', 'https://graph.facebook.com/v14.0/102167069293071/messages', [
                    'body' => $body
                ]);
                // $response = $r->getBody()->getContents();
            } catch (\Throwable $th) {
                return response()->json(['message' => $th->getMessage()]);
            }
        }

        return response()->json(['message' => "Se envio correctamente el mensaje"]);
    }

    public function sendEmail(Request $request, $id)
    {
        $paciente = User::where('id', '=', $id)->first();
        $usuario = auth()->user();
        $idUsuario = $usuario->id;
        $user = User::find($idUsuario);

        if ($paciente->email != null) {
            Mail::to($paciente->email)->queue(new TrainingMail($paciente, $user));
        }

        return response()->json(['message' => "Se envio correctamente el correo"]);
    }
}
