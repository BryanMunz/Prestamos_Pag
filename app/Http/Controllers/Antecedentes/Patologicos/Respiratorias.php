<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\PatologiasRespiratorias;
use Illuminate\Http\Request;

class Respiratorias extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologiasRespiratorias::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getRespiratorias($id) {
        return PatologiasRespiratorias::find($id);
    }
}
