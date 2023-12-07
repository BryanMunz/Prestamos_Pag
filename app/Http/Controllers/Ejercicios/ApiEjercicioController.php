<?php

namespace App\Http\Controllers\Ejercicios;

use App\Http\Controllers\Controller;
use App\Models\Ejercicios;
use App\Models\User;
use Illuminate\Http\Request;

class ApiEjercicioController extends Controller
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
            'nombre' => ['required', 'max:255'],
            'descripcion' => ['required'],
            'video' => ['required'],
            'zona' => ['required'],
            'dificultad' => ['required'],
            'especialidad' => ['required'],
            'equipo' => ['required'],
            'posicion' => ['required']
        ]);

        $usuario = auth()->user();
        $idUsuario = $usuario->id;
        $user = User::find($idUsuario);

        $urlImagen = 'ejemplo.png';
        $urlVideo = null;
        if ($request->file('video')) {
            $video = $request->file('video');
            $nombreVideo = time() . '.' . $video->getClientOriginalExtension();

            // Mueve el video a la carpeta "public/videos/"
            $video->storeAs('public/videos/', $nombreVideo);

            // Genera una URL válida para el video
            $urlVideo = asset('storage/videos/' . $nombreVideo);
        }

        $ejercicio = Ejercicios::create([
            "nombre" => $request->nombre,
            "descripcion" => $request->descripcion,
            "zona" => $request->zona,
            "dificultad" => $request->dificultad,
            "especialidad" => $request->especialidad,
            "equipo" => $request->equipo,
            "posicion" => $request->posicion,
            "imagen" => $urlImagen,
            "video" => $urlVideo
        ]);

        // Asociar el ejercicio al usuario actual
        $user->ejercicios()->attach($ejercicio->id, ['status' => 'activo']);
        return response()->json(['message' => 'Organización creada correctamente'], 201);
    }


    public function ejercicios(Request $request)
    {
        $user = auth()->user();
        $id_user = $user->id;
        $filter = $request->filter;

        switch ($filter) {
            case 'todos':
                // Obtener todos los ejercicios
                $ejercicios = \App\Models\Ejercicios::all();
                break;

            case 'mios':
                // Obtener los ejercicios del usuario logeado
                $ejercicios = $user->ejercicios;
                break;

            default:
                // Filtro por defecto si no se proporciona un filtro válido
                return response()->json(['error' => 'Filtro no válido'], 400);
        }

        // Puedes hacer más cosas con la variable $ejercicios según tus necesidades
        return $ejercicios;
    }
}
