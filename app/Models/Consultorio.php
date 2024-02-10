<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultorio extends Model
{
    use HasFactory;
    protected $table = 'consultorio';

    protected $fillable = [
        'nombre_consultorio',
        'direccion',
        'pais',
        'estado',
        'ciudad',
        'cp',
        'telefono_contacto',
        'consultorio_id',
        'logo'
    ];
}
