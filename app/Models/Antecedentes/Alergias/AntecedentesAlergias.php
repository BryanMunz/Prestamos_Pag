<?php

namespace App\Models\Antecedentes\Alergias;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AntecedentesAlergias extends Model
{
    use HasFactory;
    protected $table = 'antecedentes_alergias';
    public function alergias()
    {
        return $this->hasMany(Alergias::class);
    }
}
