<?php

namespace App\Models\Antecedentes;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antecedentes extends Model
{
    use HasFactory;

    protected $table = 'antecedentes';

    protected $fillable = [
        'paciente_id',
        'antecedentes_alergias_id',
        'antecedentes_patologicos_id',
        'antecedentes_no_patologicos_id',
        'antecedentes_gineco_id',
        'antecedentes_heredofamiliares_id',
        'antecedentes_peritanales_id',
    ];
}
