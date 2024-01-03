<?php

namespace App\Models\Antecedentes\NoPatologicos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoPatologicos extends Model
{
    use HasFactory;

    protected $table = 'antecedentes_no_patologicos';

    protected $fillable = [
        'actividad_fisica_id',
        'tabaquismo_id',
        'alcoholismo_id',
        'drogas_id',
        'vacunas_recientes_id',
        'otros_no_patologicos_id',
    ];
}
