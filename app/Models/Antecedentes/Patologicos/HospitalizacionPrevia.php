<?php

namespace App\Models\Antecedentes\Patologicos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HospitalizacionPrevia extends Model
{
    use HasFactory;

    protected $table = 'hospitalizacion_previa';

    protected $fillable = [];
}
