<?php

namespace App\Http\Controllers\Protocolos;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Pacientes\ApiPacienteController;
use App\Mail\TrainingMail;
use App\Models\Consultorio;
use App\Models\Ejercicios;
use App\Models\InfoProfesional;
use App\Models\Organizacion;
use App\Models\Protocolos\Comentarios;
use App\Models\Protocolos\Protocolos;
use App\Models\Protocolos\ProtocolosEjercicios;
use App\Models\Protocolos\ProtocolosUsers;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ApiProtocolo extends Controller
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
            'id_user' => ['required'],
            'nombre' => ['required', 'string', 'max:250'],
            'descanso' => ['required', 'numeric'],
            'comentarios' => ['string', 'max:599'],
            'fecha_inicio' => ['required', 'date'],
            'duracion' => ['required', 'numeric'],
            'Lun' => ['required', 'max:10'],
            'Mar' => ['required', 'max:10'],
            'Mie' => ['required', 'max:10'],
            'Jue' => ['required', 'max:10'],
            'Vie' => ['required', 'max:10'],
            'Sab' => ['required', 'max:10'],
            'Dom' => ['required', 'max:10'],
            'guardar' => ['required'],
            'programas' => ['required', 'array']
        ]);

        $usuario = auth()->user();
        $idUsuario = $usuario->id;
        $user = User::find($idUsuario);

        $protocolo = null;

        if ($request->guardar) {
            $protocolo = Protocolos::create([
                'nombre' => $request->nombre,
                'fecha_inicio' => $request->fecha_inicio,
                'duracion' => $request->duracion,
                'lunes' => $request->Lun,
                'martes' => $request->Mar,
                'miercoles' => $request->Mie,
                'jueves' => $request->Jue,
                'viernes' => $request->Vie,
                'sabado' => $request->Sab,
                'domingo' => $request->Dom,
                'guardado' => $request->guardar,
                'user_id' => $idUsuario
            ]);
        } else {
            $protocolo = Protocolos::create([
                'nombre' => $request->nombre,
                'fecha_inicio' => $request->fecha_inicio,
                'duracion' => $request->duracion,
                'lunes' => $request->Lun,
                'martes' => $request->Mar,
                'miercoles' => $request->Mie,
                'jueves' => $request->Jue,
                'viernes' => $request->Vie,
                'sabado' => $request->Sab,
                'domingo' => $request->Dom,
                'guardado' => $request->guardar
            ]);
        }

        $programas = $request->programas;


        foreach ($programas as $key => $programa) {
            if (
                array_key_exists('peso', $programa) &&
                array_key_exists('repeticiones', $programa) &&
                array_key_exists('sets', $programa) &&
                array_key_exists('position', $programa) &&
                array_key_exists('hold', $programa) &&
                array_key_exists('descanso', $programa) &&
                array_key_exists('id', $programa)
            ) {

                ProtocolosEjercicios::create([
                    'peso' => $programa['peso'],
                    'repeticiones' => $programa['repeticiones'],
                    'sets' => $programa['sets'],
                    'orden' => $programa['position'],
                    'hold' => $programa['hold'],
                    'descanso' => $programa['descanso'],
                    'protocolo_id' => $protocolo->id,
                    'ejercicio_id' => $programa['id']
                ]);
            }
        }

        ProtocolosUsers::create([
            'user_id' => $request->id_user,
            'protocolo_id' => $protocolo->id,
            'estatus' => 'activo'
        ]);

        if ($request->comentarios) {
            Comentarios::create([
                'comentario' => $request->comentarios,
                'protocolo_id' => $protocolo->id
            ]);
        }

        $paciente = User::find($request->id_user);
        if ($paciente->num_telefono != null) {
            $apiPaciente = new ApiPacienteController;
            $apiPaciente->sendMessage($request, $request->id_user);
        }

        if ($paciente->email != null) {
            Mail::to($paciente->email)->queue(new TrainingMail($paciente, $user));
        }

        return response()->json(['protocolo' => $protocolo, 'message' => 'Se agrego correctamente'], 201);
    }


    public function update(Request $request)
    {
        $request->validate([
            'nombre' => ['required', 'string', 'max:250'],
            'descanso' => ['required', 'numeric'],
            'comentarios' => ['max:599'],
            'fecha_inicio' => ['required', 'date'],
            'duracion' => ['required', 'numeric'],
            'Lun' => ['required', 'max:10'],
            'Mar' => ['required', 'max:10'],
            'Mie' => ['required', 'max:10'],
            'Jue' => ['required', 'max:10'],
            'Vie' => ['required', 'max:10'],
            'Sab' => ['required', 'max:10'],
            'Dom' => ['required', 'max:10'],
            'guardar' => ['required'],
            'programas' => ['required', 'array'],
            'id' => ['required', 'numeric']
        ]);

        $usuario = auth()->user();
        $idUsuario = $usuario->id;
        $user = User::find($idUsuario);

        // Buscar el protocolo existente
        $protocolo = Protocolos::find($request->id);

        if (!$protocolo) {
            return response()->json(['error' => 'Protocolo no encontrado'], 404);
        }

        // Actualizar los campos del protocolo
        $protocolo->update([
            'nombre' => $request->nombre,
            'fecha_inicio' => $request->fecha_inicio,
            'duracion' => $request->duracion,
            'lunes' => $request->Lun,
            'martes' => $request->Mar,
            'miercoles' => $request->Mie,
            'jueves' => $request->Jue,
            'viernes' => $request->Vie,
            'sabado' => $request->Sab,
            'domingo' => $request->Dom,
            'guardado' => $request->guardar,
            'user_id' => $idUsuario
        ]);

        // Eliminar los programas existentes asociados al protocolo
        $protocolo->ejercicios()->delete();

        // Crear los nuevos programas
        $programas = $request->programas;
        foreach ($programas as $key => $programa) {
            if (isset($programa['position'])) {
                ProtocolosEjercicios::create([
                    'peso' => $programa['peso'],
                    'repeticiones' => $programa['repeticiones'],
                    'sets' => $programa['sets'],
                    'orden' => $programa['position'],
                    'hold' => $programa['hold'],
                    'descanso' => $programa['descanso'],
                    'protocolo_id' => $protocolo->id,
                    'ejercicio_id' => $programa['id']
                ]);
            }
        }

        // Actualizar la relación entre usuario y protocolo
        // ProtocolosUsers::updateOrCreate(
        //     ['user_id' => $request->id_user, 'protocolo_id' => $protocolo->id],
        //     ['user_id' => $request->id_user, 'protocolo_id' => $protocolo->id]
        // );

        // Crear o actualizar los comentarios
        if ($request->comentarios) {
            Comentarios::create(
                [
                    'protocolo_id' => $protocolo->id,
                    'comentario' => $request->comentarios
                ]
            );
        }

        return response()->json(['protocolo' => $protocolo], 200);
    }

    public function asignarProtocolo(Request $request)
    {

        $request->validate([
            'id_paciente' => ['required', 'numeric'],
            'id_protocolo' => ['required', 'numeric']
        ]);

        $protocolo = ProtocolosUsers::where('user_id', $request->id_paciente)->where('protocolo_id', $request->id_protocolo)->get();

        if (!$protocolo->isEmpty()) {
            return response()->json(['message' => $protocolo], 409);
        }

        ProtocolosUsers::create([
            'user_id' => $request->id_paciente,
            'protocolo_id' => $request->id_protocolo,
            'estatus' => 'activo'
        ]);

        $usuario = auth()->user();
        $idUsuario = $usuario->id;
        $user = User::find($idUsuario);

        $paciente = User::find($request->id_paciente);
        if ($paciente->num_telefono != null) {
            $apiPaciente = new ApiPacienteController;
            $apiPaciente->sendMessage($request, $request->id_paciente);
        }

        if ($paciente->email != null) {
            Mail::to($paciente->email)->queue(new TrainingMail($paciente, $user));
        }

        return response()->json(['message' => 'Se asigno correctamente', 'protocolo' => $paciente], 201);
    }

    public function getProtocolos(Request $request)
    {
        $data = [];
        $protocolos = Protocolos::with('ejercicios')->where('guardado', 0)->paginate(10);

        // Agregar la información de paginación al array de datos
        $data['last_page'] = $protocolos->lastPage();
        $data['total'] = $protocolos->total();

        // Convertir los protocolos a un array
        $protocolosArray = $protocolos->items();

        // Convertir los ejercicios asociados de cada protocolo en arrays
        foreach ($protocolosArray as &$protocolo) {
            $protocolo['ejercicios'] = $protocolo->ejercicios->toArray();
        }

        $data['protocolos'] = $protocolosArray;

        // Devuelve la respuesta JSON con los datos y la información de paginación
        return response()->json($data);
    }

    public function getProtocolo(Request $request)
    {
        $request->validate([
            'id_paciente' => ['required', 'numeric']
        ]);

        $user = auth()->user();
        $id_user = $user->id;

        $Usuario = User::find($id_user);

        $organizacion =  Organizacion::find($id_user);
        $infoProfesional = InfoProfesional::where('user_id', $id_user)->first();
        $consultorio = null;
        if ($infoProfesional) {
            $consultorio = Consultorio::where('consultorio_id', $infoProfesional->id)->first();
        }



        $protocoloUsuario = ProtocolosUsers::where('user_id', $request->id_paciente)->where('estatus', 'activo')->first();

        if (empty($protocoloUsuario)) return response()->json(['message' => 'El paciente no tiene un protocolo o un protocolo activo'], 204);

        $protocolo = Protocolos::find($protocoloUsuario->protocolo_id);
        // $protocolo = $protocoloEjercicios->protocolo();


        $dias = [];
        if ($protocolo->lunes)  array_push($dias, 'Monday');
        if ($protocolo->martes)  array_push($dias, 'Tuesday');
        if ($protocolo->miercoles)  array_push($dias, 'Wednesday');
        if ($protocolo->jueves)  array_push($dias, 'Thursday');
        if ($protocolo->viernes)  array_push($dias, 'Friday');
        if ($protocolo->sabado)  array_push($dias, 'Saturday');
        if ($protocolo->domingo)  array_push($dias, 'Sunday');

        $fechas = $this->obtenerFechasPorDias($protocolo->fecha_inicio, $protocolo->duracion, $dias);

        $fechasDias = $this->obtenerDiasConDuracion($protocolo->fecha_inicial, $protocolo->duracion);

        $protocolo_ejercicio = ProtocolosEjercicios::where('protocolo_id', $protocolo->id)->get();

        $ejercicios = [];
        $ejercicios2 = [];
        $preEjercicios = [];
        foreach ($protocolo_ejercicio as $key => $value) {
            $ejercicio = Ejercicios::find($value->ejercicio_id);
            array_push($ejercicios2, $ejercicio);
            $preEjercicios = [
                'id' => $value->id,
                'id_ejercicio_protocolo' => $value->id,
                'id_ejercicio' => $value->ejercicio_id,
                'peso' => $value->peso,
                'repeticiones' => $value->repeticiones,
                'sets' => $value->sets,
                'position' => $value->orden,
                'hold' => $value->hold,
                'descanso' => $value->descanso,
                'nombre' => $ejercicio->nombre,
                'imagen' => $ejercicio->imagen,
                'descripcion' => $ejercicio->descripcion,

            ];

            array_push($ejercicios, $preEjercicios);
        }

        return response()->json(
            [
                'protocolo' => $protocolo,
                'ejercicios' => $ejercicios2,
                'ejercicio_protocolo' => $ejercicios,
                'usuario' => $Usuario,
                'informacion_profesional' => $infoProfesional,
                'consultorio' => $consultorio,
                'organizacion' => $organizacion,
                'fechas' => $fechas,
                'dias' => $fechasDias,
                'protocolo_usuario' => $protocoloUsuario
            ],
            200
        );
    }

    public function deleteEjercicio(Request $request)
    {
        $request->validate([
            'protocolo_id' => ['required', 'numeric'],
            'ejercicio_id' => ['required', 'numeric']
        ]);

        $protocoloEjercicios = ProtocolosEjercicios::where('protocolo_id', '=', $request->protocolo_id)->where('ejercicio_id', '=', $request->ejercicio_id)->first();

        $protocoloEjercicios->delete();
        return response()->json(['message' => 'Se elimino correctamente']);
    }
    public function obtenerFechasPorDias($fechaInicio, $duracionSemanas, $dias)
    {
        // Convertir la fecha inicial a un objeto Carbon
        $fechaInicio = Carbon::parse($fechaInicio);

        // Calcular la fecha de finalización sumando la duración en semanas
        $fechaFin = $fechaInicio->copy()->addWeeks($duracionSemanas);

        // Obtener todos los días entre las dos fechas
        $fechasPorDias = [];
        while ($fechaInicio->lte($fechaFin)) {
            // Obtener el nombre del día actual
            $nombreDia = $fechaInicio->format('l');
            // Obtener el mes y el día
            $mesDia = $fechaInicio->format('m/d');

            // Verificar si el día actual coincide con alguno de los días especificados
            $fechasPorDias[$mesDia] = in_array(strtolower($nombreDia), array_map('strtolower', $dias)) ? $mesDia : '--';

            // Mover al siguiente día
            $fechaInicio->addDay();
        }

        return $fechasPorDias;
    }


    public function obtenerDiasConDuracion($fechaInicio, $duracionSemanas)
    {
        // Convertir la fecha inicial a un objeto Carbon
        $fechaInicio = Carbon::parse($fechaInicio);

        // Calcular la fecha de finalización sumando la duración en semanas
        $fechaFin = $fechaInicio->copy()->addWeeks($duracionSemanas);

        // Obtener todos los días entre las dos fechas
        $dias = [];
        while ($fechaInicio->lte($fechaFin)) {
            // Agregar el mes y día actual al array
            $dias[] = $fechaInicio->format('m/d');

            // Mover al siguiente día
            $fechaInicio->addDay();
        }

        return $dias;
    }

    public function updateEstatus(Request $request)
    {
        $request->validate(['id' => ['required', 'numeric']]);

        $protocoloPaciente = ProtocolosUsers::find($request->id);

        $protocoloPaciente->estatus = 'finalizado';

        $protocoloPaciente->save();

        return response()->json(['message' => 'Se finalizo correctamente']);
    }
}
