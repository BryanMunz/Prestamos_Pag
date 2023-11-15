<?php

namespace App\Http\Controllers\Pacientes;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

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
        $request->validate([
            'nombre' => ['required', 'max:255'],
            'apellidos' => ['required', 'max:255'],
            'sexo' => ['required', 'max:1'],
            'fecha_nacimiento' => ['required'],
            'email' => ['email', 'max:255', 'unique:users'],
            'telefono' => ['max:11', 'min:9'],
        ]);

        User::create([
            'name' => $request->nombre,
            'email' => $request->email,
            'last_name' => $request->apellidos,
            'fecha_nacimiento' => $request->fecha_nacimiento,
            'num_telefono' => $request->telefono,
            'sexo' => $request->sexo,
            'rol_id' => 2,
            'wizard' => 1
        ]);


        return response()->json(['message' => 'Paciente creado'], 201);
    }

    public function delete($id)
    {
        $paciente = User::find($id);

        if (!$paciente) {
            return response()->json(['error' => 'Registro no encontrado'], 404);
        }

        $paciente->delete();

        return response()->json(['mensaje' => 'Registro eliminado con éxito']);
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

        $pacientes = \App\Models\User::where('rol_id', 2)
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
}
