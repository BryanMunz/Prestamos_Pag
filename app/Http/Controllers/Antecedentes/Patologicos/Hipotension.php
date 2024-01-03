<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\Hipotension as PatologicosHipotension;
use Illuminate\Http\Request;

class Hipotension extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologicosHipotension::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getHipotension($id) {
        return PatologicosHipotension::find($id);
    }
}
