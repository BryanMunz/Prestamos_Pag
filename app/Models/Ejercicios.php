<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejercicios extends Model
{
    use HasFactory;

    protected $table = 'ejercicios';

    protected $fillable = [
        'nombre',
        'descripcion',
        'zona',
        'dificultad',
        'especialidad',
        'equipo',
        'posicion',
        'imagen',
        'video',
    ];

    public function users(){
        return $this->belongsToMany(User::class, 'users_ejercicios');
    }
}
