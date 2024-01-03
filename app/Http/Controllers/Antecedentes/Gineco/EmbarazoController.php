<?php

namespace App\Http\Controllers\Antecedentes\Gineco;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Gineco\Embarazos;
use Illuminate\Http\Request;

class EmbarazoController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = Embarazos::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getEmbarazo($id) {
        return Embarazos::find($id);
    }
}
