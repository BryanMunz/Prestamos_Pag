<?php

namespace App\Models\Antecedentes\Gineco;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gineco extends Model
{
    use HasFactory;

    protected $table = 'antecedentes_gineco';

    protected $fillable = [
        'embarazo_id',
        'menarca_id',
        'cancer_uterino_id',
        'ultima_mestruacion_id',
        'otros_gineco_id',
    ];
}
