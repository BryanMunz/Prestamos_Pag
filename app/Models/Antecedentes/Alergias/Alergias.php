<?php

namespace App\Models\Antecedentes\Alergias;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alergias extends Model
{
    use HasFactory;

    protected $table = 'alergias';

    protected $fillable = [
        'nombre_alergia',
        'otras_alergias',
        'antecedentes_alergias'
    ];
}
