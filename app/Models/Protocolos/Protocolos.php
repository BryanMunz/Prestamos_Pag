<?php

namespace App\Models\Protocolos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Protocolos extends Model
{
    use HasFactory;

    protected $table = 'protocolos';

    protected $fillable = [
        'nombre',
        'comentarios',
        'fecha_inicio',
        'duracion',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado',
        'domingo',
        'guardado',
        'user_id'
    ];

    public function ejercicios()
    {
        return $this->hasMany(ProtocolosEjercicios::class, 'protocolo_id');
    }
}
