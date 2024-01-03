<?php

namespace App\Models\HistoriaClinica;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SignosVitales extends Model
{
    use HasFactory;

    protected $table = 'signos_vitales';

    protected $fillable = [
        'frecuencia_cardiaca',
        'temperatura',
        'saturacion_oxigeno',
        'frecuencia_respiratoria',
        'presion_arterial',
        'historia_clinica_id'
    ];
}
