<?php

namespace App\Http\Controllers\Protocolos;

use App\Http\Controllers\Controller;
use App\Models\Protocolos\Protocolos;
use App\Models\Protocolos\ProtocolosEjercicios;
use App\Models\Protocolos\ProtocolosUsers;
use App\Models\User;
use Illuminate\Http\Request;

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
            'comentarios' => ['required', 'string', 'max:599'],
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
                'comentarios' => $request->comentarios,
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
                'comentarios' => $request->comentarios,
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

        ProtocolosUsers::create([
            'user_id' => $request->id_user,
            'protocolo_id' => $protocolo->id
        ]);


        return response()->json(['message' => 'Protocolo guardado'], 201);
    }
}
