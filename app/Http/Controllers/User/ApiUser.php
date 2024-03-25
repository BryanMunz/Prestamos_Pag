<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ApiUser extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function updateWizard(Request $request)
    {
        $request->validate([
            'id_user' => ['required']
        ]);

        $user = User::find($request->id_user);
        $user->wizard = 2;
        $user->save();


        return response()->json(['message' => 'Paciente creado'], 201);
    }

    public function update(Request $request)
    {
        $request->validate([
            'id_user' => ['required', 'numeric'],
            'nombre' => ['required', 'string', 'max:255'],
            'apellidos' => ['required', 'string', 'max:255'],
            'fechaNacimiento' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'string', 'email', 'max:255', 'unique:users'],
            'telefono' => ['string','nullable', 'max:10']
        ]);

        $user = User::find($request->id_user);
        $user->name = $request->nombre;
        $user->last_name = $request->apellidos;
        $user->fecha_nacimiento = $request->fechaNacimiento;
        $user->email = $request->email;
        $user->num_telefono = $request->telefono;
        $user->save();


        return response()->json(['message' => 'Paciente actualizado correctamente'], 201);
    }

}
