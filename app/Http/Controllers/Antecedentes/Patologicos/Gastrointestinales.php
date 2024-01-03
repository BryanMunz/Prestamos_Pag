<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\PatologiasGastrointestinales;
use Illuminate\Http\Request;

class Gastrointestinales extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologiasGastrointestinales::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getGastrointestinales($id) {
        return PatologiasGastrointestinales::find($id);
    }
}
