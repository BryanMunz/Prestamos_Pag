<?php

namespace App\Http\Controllers\Antecedentes\NoPatologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\NoPatologicos\Tabaquismo;
use Illuminate\Http\Request;

class TabaquismoController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null)
    {
        $antecedente = Tabaquismo::find($id);
        if ($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if ($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getTabaquismo($id)
    {
        return Tabaquismo::find($id);
    }
}
