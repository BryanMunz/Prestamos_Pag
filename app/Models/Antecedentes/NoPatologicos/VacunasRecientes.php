<?php

namespace App\Models\Antecedentes\NoPatologicos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VacunasRecientes extends Model
{
    use HasFactory;

    protected $table = 'vacunas_recientes';

    protected $fillable = [];
}
