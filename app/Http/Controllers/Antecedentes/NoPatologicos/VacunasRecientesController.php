<?php

namespace App\Http\Controllers\Antecedentes\NoPatologicos;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\NoPatologicos\VacunasRecientes;
use Illuminate\Http\Request;

class VacunasRecientesController extends Controller
{
    public function store($id, $respuesta = null, $descripcion = null) {
        $antecedente = VacunasRecientes::find($id);
        if($respuesta) {
            $antecedente->respuesta = $respuesta;
        }
        if($descripcion) {
            $antecedente->descripcion = $descripcion;
        }
        $antecedente->save();
    }

    public function getVacunasRecientes($id) {
        return VacunasRecientes::find($id);
    }
}
