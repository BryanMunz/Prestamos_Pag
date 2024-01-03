<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\Cardiopatias as PatologicosCardiopatias;
use Illuminate\Http\Request;

class CardioPatias extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologicosCardiopatias::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getCardiopatias($id) {
        return PatologicosCardiopatias::find($id);
    }
}
