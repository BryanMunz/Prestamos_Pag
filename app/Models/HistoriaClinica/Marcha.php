<?php

namespace App\Models\HistoriaClinica;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marcha extends Model
{
    use HasFactory;
    protected $table = "marcha";
    protected $fillable = [
        'claudicante',
        'con_auxiliares',
        'espastica',
        'ataxica',
        'historia_clinica_id'
    ];
}
