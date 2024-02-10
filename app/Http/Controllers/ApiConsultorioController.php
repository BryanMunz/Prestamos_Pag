<?php

namespace App\Http\Controllers;

use App\Models\Consultorio;
use Illuminate\Http\Request;
use App\Models\Organizacion;
use App\Models\InfoProfesional;

class ApiConsultorioController extends Controller
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
            'direccion' => ['required', 'max:255'],
            'pais' => ['required', 'max:255'],
            'estado' => ['required'],
            'ciudad' => ['required', 'max:255'],
            'cp' => ['required', 'max:10'],
            'telefono' => ['required', 'max:10'],
            'cedula' => ['required', 'max:255'],
            'especialidad' => ['required', 'max:255'],
            'instituto' => ['required', 'max:255'],
            'logo' => ['image']
        ]);

        $urlImagen = null;
        if ($request->file('logo')) {
            $imagen = $request->file('logo');
            $nombreImagen = time() . '.' . $imagen->getClientOriginalExtension();

            // Utiliza el método storeAs para mover la imagen a la carpeta "public"
            $imagen->storeAs('public/logos/', $nombreImagen);

            // Genera una URL válida para la imagen
            $urlImagen = asset('storage/logos/' . $nombreImagen);
        }
        $id_organizacion = Organizacion::where('organizacion_id', $request->id_user)->first();

        Consultorio::create([
            'nombre_consultorio' => $request->nombre,
            'direccion' => $request->direccion,
            'pais' => $request->pais,
            'estado' => $request->estado,
            'ciudad' => $request->ciudad,
            'cp' => $request->cp,
            'telefono_contacto' => $request->telefono,
            'consultorio_id' => $id_organizacion->id,
            'logo' => $urlImagen
        ]);

        InfoProfesional::create([
            'cedula' => $request->cedula,
            'especialidad' => $request->especialidad,
            'instituto_otorgo_cedula' => $request->instituto,
            'user_id' => $request->id_user
        ]);


        return response()->json(['message' => 'Organización creada correctamente'], 201);
    }
}
