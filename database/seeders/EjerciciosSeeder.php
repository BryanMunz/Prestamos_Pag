<?php

namespace Database\Seeders;

use App\Models\Ejercicios;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class EjerciciosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Administrador',
            'email' => 'admin@gmail.com',
            'last_name' => 'Admin',
            'password' => Hash::make('admin'),
            'rol_id' => 1,
            'wizard' => 2
        ]);

        $ejercicio = Ejercicios::create([
            "nombre" => 'Yoga',
            "descripcion" => 'Sistema antiguo de prácticas que se usa para equilibrar la mente y el cuerpo mediante el ejercicio, meditación (enfoque de los pensamientos), y el control de la respiración y las emociones.',
            "zona" => 'Rodilla',
            "dificultad" => 'Basico',
            "especialidad" => 'Neurología',
            "equipo" => 'Escalón',
            "posicion" => 'Colgando',
            "imagen" => 'http://localhost:8000/storage/image/yoga.jpg',
            "video" => 'http://localhost:8000/storage/videos/1706522682.mp4'
        ]);

        $ejercicio2 = Ejercicios::create([
            "nombre" => 'Sentadillas',
            "descripcion" => 'Ejercicio que consiste en flexionar las piernas bajando el cuerpo recto hasta quedar en cuclillas.',
            "zona" => 'Rodilla',
            "dificultad" => 'Basico',
            "especialidad" => 'Neurología',
            "equipo" => 'Escalón',
            "posicion" => 'Colgando',
            "imagen" => 'http://localhost:8000/storage/image/sentadilla.jpg',
            "video" => 'http://localhost:8000/storage/videos/1706522682.mp4'
        ]);

        $ejercicio3 = Ejercicios::create([
            "nombre" => 'Sentadillas',
            "descripcion" => 'Ejercicio aeróbico que se realiza utilizando una plataforma elevada llamada step',
            "zona" => 'Rodilla',
            "dificultad" => 'Basico',
            "especialidad" => 'Neurología',
            "equipo" => 'Escalón',
            "posicion" => 'Colgando',
            "imagen" => 'http://localhost:8000/storage/image/elevacion.png',
            "video" => 'http://localhost:8000/storage/videos/1706522682.mp4'
        ]);

        // Asociar el ejercicio al usuario actual
        $user->ejercicios()->attach($ejercicio->id, ['status' => 'activo']);
        $user->ejercicios()->attach($ejercicio2->id, ['status' => 'activo']);
        $user->ejercicios()->attach($ejercicio3->id, ['status' => 'activo']);
    }
}
