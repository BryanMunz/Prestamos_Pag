<?php

namespace App\Models;

use App\Models\Protocolos\Protocolos;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'last_name',
        'password',
        'fecha_nacimiento',
        'sexo',
        'num_telefono',
        'rol_id',
        'wizard',
        'user_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function rol()
    {
        return $this->belongsTo(Rol::class);
    }

    public function ejercicios()
    {
        return $this->belongsToMany(Ejercicios::class, 'users_ejercicios', 'user_id', 'ejercicio_id')->withPivot('status');
    }

    public function protocolos()
    {
        return $this->belongsToMany(Protocolos::class, 'protocolos_pacientes', 'user_id', 'protocolo_id')->withPivot('estatus');
    }


    public function subscription()
    {
        return $this->hasOne(Subscription::class);
    }

    public function hasActiveSuscription()
    {
        return optional($this->subscription)->isActive() ?? false;
    }
}
