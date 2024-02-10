<?php

namespace App\Models\Antecedentes\Peritanales;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peritanales extends Model
{
    use HasFactory;

    protected $table = 'antecedentes_peritanales';

    protected $fillable = [
        'semana_gestion',
        'complicaciones',
        'parto/cesarea',
        'hora_parto',
        'otros',
        'descripcion',
    ];
}
