<?php

namespace App\Http\Controllers\Antecedentes\Gineco;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Gineco\UltimaMestruacion;
use Illuminate\Http\Request;

class UltimaMestruacionController extends Controller
{
    public function store($id, $respuesta)
    {
        $antecedente = UltimaMestruacion::find($id);

        $antecedente->respuesta = 'si';
        $antecedente->descripcion = $respuesta;

        $antecedente->save();
    }

    public function getUltimaMestruacion($id)
    {
        return UltimaMestruacion::find($id);
    }
}
