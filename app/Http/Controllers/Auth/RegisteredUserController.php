<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'last_name' => ['required', 'string', 'max:255'],
            'terminos' => ['required', 'accepted']
        ];

        $message = [
            'terminos.required' => 'Este campo debe de ser aceptado',
            'terminos.accepted' => 'Este campo debe de ser aceptado'
        ];


        $this->validate($request, $rules, $message);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'last_name' => $request->last_name,
            'password' => Hash::make($request->password),
            'rol_id' => 1,
            'wizard' => 0
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
