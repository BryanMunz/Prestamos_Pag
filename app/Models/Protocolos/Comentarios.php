<?php

namespace App\Models\Protocolos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentarios extends Model
{
    use HasFactory;
    protected $table = "comentarios";
    protected $fillable = [
        'comentario',
        'protocolo_id'
    ];
}
