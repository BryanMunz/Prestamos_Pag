<?php

namespace App\Http\Controllers\Antecedentes;

use App\Http\Controllers\Antecedentes\Gineco\ApiAntecedentesGinecoObtetricos;
use App\Http\Controllers\Antecedentes\NoPatologicos\ApiAntecedentesNoPatologicos;
use App\Http\Controllers\Antecedentes\Patologicos\ApiAntecedentesPatologicos;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiAntecedentes extends Controller
{
    public function getAntecedentes(Request $request)
    {
        $rules = [
            'id_paciente' => ['required']
        ];

        $Patologicos = new ApiAntecedentesPatologicos;
        $patologicos = $Patologicos->getAntecedentesPatologicos($request);

        $NoPatologicos = new ApiAntecedentesNoPatologicos;
        $noPatologicos = $NoPatologicos->getAntecedentesNoPatologicos($request);

        $Gineco = new ApiAntecedentesGinecoObtetricos;
        $gineco= $Gineco->getAntecedentesGineco($request);

        return [
            'antecedentes_patologicos' => $patologicos,
            'antecedentes_no_patologicos' => $noPatologicos,
            'antecedentes_gineco' => $gineco,
        ];
    }
}
