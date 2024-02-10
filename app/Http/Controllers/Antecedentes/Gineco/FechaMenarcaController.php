<?php

namespace App\Http\Controllers\Antecedentes\Gineco;

use App\Http\Controllers\Controller;
use App\Models\Antecedentes\Gineco\Menarca;
use Illuminate\Http\Request;

class FechaMenarcaController extends Controller
{
    public function store($id, $respuesta)
    {
        $antecedente = Menarca::find($id);

        $antecedente->respuesta = 'si';
        $antecedente->descripcion = $respuesta;

        $antecedente->save();
    }

    public function getFechaMenarca($id)
    {
        return Menarca::find($id);
    }
}
