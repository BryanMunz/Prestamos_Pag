<?php

namespace App\Http\Controllers;

use App\Models\Organizacion;
use App\Models\User;
use Illuminate\Http\Request;

class ApiOrginizacionController extends Controller
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
            'nombre' => ['required', 'max:255'],
            'tipo' => ['required', 'max:255'],
            'especialidad' => ['required', 'max:255'],
            'num_personas' => ['required'],
            'telefono' => ['required', 'max:10'],
        ]);


        Organizacion::create([
            'nombre_organizacion' => $request->nombre,
            'tipo' => $request->tipo,
            'especialidad' => $request->especialidad,
            'num_personas' => $request->num_personas,
            'num_telefono' => $request->telefono,
            'organizacion_id' => $request->id_user
        ]);

        $user = User::find($request->id_user);
        $user->wizard = 1;
        $user->save();

        return response()->json(['message' => 'Organización creada correctamente'], 201);
    }
}
