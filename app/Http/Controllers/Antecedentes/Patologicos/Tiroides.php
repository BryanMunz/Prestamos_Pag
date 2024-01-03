<?php

namespace App\Http\Controllers\Antecedentes\Patologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Patologicos\Tiroides as PatologicosTiroides;
use Illuminate\Http\Request;

class Tiroides extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $hipertension = PatologicosTiroides::find($id);
        if($respuesta) {
            $hipertension->respuesta = $respuesta;
        }
        if($descripcion) {
            $hipertension->descripcion = $descripcion;
        }
        $hipertension->save();
    }

    public function getTiroides($id) {
        return PatologicosTiroides::find($id);
    }
}
