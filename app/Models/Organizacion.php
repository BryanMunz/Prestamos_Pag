<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organizacion extends Model
{
    use HasFactory;
    protected $table = 'organizacion';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre_organizacion',
        'tipo',
        'especialidad',
        'num_personas',
        'num_telefono',
        'organizacion_id'
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
