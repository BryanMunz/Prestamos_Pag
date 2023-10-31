<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoProfesional extends Model
{
    use HasFactory;
    protected $table = 'info_profesional';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'cedula',
        'especialidad',
        'instituto_otorgo_cedula',
        'user_id',
    ];
}
