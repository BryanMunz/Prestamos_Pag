<?php

namespace App\Models\HistoriaClinica;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traslado extends Model
{
    use HasFactory;

    protected $table = "traslado";
    protected $fillable = [
        'independiente',
        'con_auxiliares',
        'silla_ruedas',
        'camilla',
        'baston',
        'muletas',
        'historia_clinica_id'
    ];
}
