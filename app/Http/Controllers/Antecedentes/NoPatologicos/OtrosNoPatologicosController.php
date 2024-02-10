<?php

namespace App\Http\Controllers\Antecedentes\NoPatologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\NoPatologicos\OtrosNoPatologicos;
use Illuminate\Http\Request;

class OtrosNoPatologicosController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = OtrosNoPatologicos::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getOtrosNoPatologicos($id) {
        return OtrosNoPatologicos::find($id);
    }
}
