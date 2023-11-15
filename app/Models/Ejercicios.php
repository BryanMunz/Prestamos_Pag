<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejercicios extends Model
{
    use HasFactory;

    protected $table = 'ejercicios';

    public function users(){
        return $this->belongsToMany(User::class, 'users_ejercicios');
    }
}
