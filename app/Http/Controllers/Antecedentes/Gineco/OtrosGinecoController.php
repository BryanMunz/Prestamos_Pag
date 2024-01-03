<?php

namespace App\Http\Controllers\Antecedentes\Gineco;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Gineco\OtrosGineco;
use Illuminate\Http\Request;

class OtrosGinecoController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = OtrosGineco::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getOtrosGineco($id) {
        return OtrosGineco::find($id);
    }
}
