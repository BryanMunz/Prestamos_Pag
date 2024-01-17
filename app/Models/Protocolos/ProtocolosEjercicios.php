<?php

namespace App\Models\Protocolos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProtocolosEjercicios extends Model
{
    use HasFactory;

    protected $table = 'protocolos_ejercicios';

    protected $fillable = [
        'peso',
        'repeticiones',
        'sets',
        'orden',
        'hold',
        'descanso',
        'protocolo_id',
        'ejercicio_id'
    ];
}
