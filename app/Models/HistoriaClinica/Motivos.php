<?php

namespace App\Models\HistoriaClinica;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Motivos extends Model
{
    use HasFactory;
    protected $table = "motivos";
    protected $fillable = [
        'motivos',
        'historia_clinica_id'
    ];
}
