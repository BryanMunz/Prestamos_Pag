<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Somatometria extends Model
{
    use HasFactory;

    protected $table = 'somatometria';

    protected $fillable = [
        'grasa_corporal',
        'estatura',
        'imc',
        'masa_muscular',
        'peso',
        'historia_clinica_id'
    ];
}
