<?php

namespace App\Http\Controllers\Antecedentes\Gineco;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Gineco\CancerUterino;
use Illuminate\Http\Request;

class CancerUterinoController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = CancerUterino::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getCancerUterino($id) {
        return CancerUterino::find($id);
    }
}
