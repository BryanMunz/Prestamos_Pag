<?php

namespace App\Http\Controllers\Antecedentes\NoPatologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\NoPatologicos\Drogas;
use Illuminate\Http\Request;

class DrogasController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = Drogas::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getDrogas($id) {
        return Drogas::find($id);
    }
}
