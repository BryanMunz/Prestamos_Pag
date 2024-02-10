<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\CirugiasPrevias as PatologicosCirugiasPrevias;
use Illuminate\Http\Request;

class CirugiasPrevias extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologicosCirugiasPrevias::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getCirugias($id) {
        return PatologicosCirugiasPrevias::find($id);
    }
}
