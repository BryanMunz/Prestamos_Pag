<?php

namespace App\Http\Controllers\Antecedentes\NoPatologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\NoPatologicos\Alcoholismo;
use Illuminate\Http\Request;

class AlcoholismoController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = Alcoholismo::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getAlcoholismo($id) {
        return Alcoholismo::find($id);
    }
}
