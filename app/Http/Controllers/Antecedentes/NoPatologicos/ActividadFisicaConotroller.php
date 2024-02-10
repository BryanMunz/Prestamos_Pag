<?php

namespace App\Http\Controllers\Antecedentes\NoPatologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\NoPatologicos\ActividadFisica;
use Illuminate\Http\Request;

class ActividadFisicaConotroller extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = ActividadFisica::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getActividadFisica($id) {
        return ActividadFisica::find($id);
    }
}
