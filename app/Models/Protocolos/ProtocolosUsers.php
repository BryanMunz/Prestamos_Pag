<?php

namespace App\Models\Protocolos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProtocolosUsers extends Model
{
    use HasFactory;

    protected $table = 'protocolos_pacientes';

    protected $fillable = [
        'user_id',
        'protocolo_id',
        'estatus'
    ];

    public function protocolo()
    {
        return $this->hasMany(Protocolos::class, 'protocolo_id');
    }
}
