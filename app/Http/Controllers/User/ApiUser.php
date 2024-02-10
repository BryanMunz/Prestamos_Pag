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
    public function update(Request $request)
    {
        $request->validate([
            'id_user' => ['required']
        ]);

        $user = User::find($request->id_user);
        $user->wizard = 2;
        $user->save();


        return response()->json(['message' => 'Paciente creado'], 201);
    }
}
