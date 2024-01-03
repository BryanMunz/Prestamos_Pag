<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\HospitalizacionPrevia;
use Illuminate\Http\Request;

class Hospitalizacion extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = HospitalizacionPrevia::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getHospitalizacion($id) {
        return HospitalizacionPrevia::find($id);
    }
}
