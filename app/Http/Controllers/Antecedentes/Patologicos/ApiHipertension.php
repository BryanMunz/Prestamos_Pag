<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\Hipertension;
use Illuminate\Http\Request;

class ApiHipertension extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = Hipertension::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getHipertencion($id) {
        return Hipertension::find($id);
    }
}

