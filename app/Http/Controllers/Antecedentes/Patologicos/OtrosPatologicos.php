<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\OtrosPatologicos as PatologicosOtrosPatologicos;
use Illuminate\Http\Request;

class OtrosPatologicos extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologicosOtrosPatologicos::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getOtroPatologicos($id) {
        return PatologicosOtrosPatologicos::find($id);
    }
}
