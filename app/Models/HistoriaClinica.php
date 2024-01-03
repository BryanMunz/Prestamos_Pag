<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoriaClinica extends Model
{
    use HasFactory;

    protected $table = 'historia_clinica';

    protected $fillable = [
        'motivos',
        'paciente_id',
        'cita_subsecuente'
    ];
}
