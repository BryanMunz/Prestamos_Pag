<?php

namespace App\Models\Antecedentes\Patologicos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AntecedentesPatologicos extends Model
{
    use HasFactory;
    protected $table = 'antecedentes_patologicos';

    protected $fillable = [
        'hipertension_id',
        'hospitalizacion_previa_id',
        'cirugias_previas_id',
        'diabetes_id',
        'tiroides_id',
        'hipotension_id',
        'cardiopatias_id',
        'traumatismo_id',
        'cancer_id',
        'patologias_respiratorias_id',
        'gastrointestinales_id',
        'otros_patologicos_id'
    ];
}
