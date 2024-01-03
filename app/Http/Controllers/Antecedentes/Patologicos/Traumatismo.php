<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\Traumatismo as PatologicosTraumatismo;
use Illuminate\Http\Request;

class Traumatismo extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologicosTraumatismo::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getTraumatismo($id) {
        return PatologicosTraumatismo::find($id);
    }
}
