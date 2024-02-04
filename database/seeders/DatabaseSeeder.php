<?php

namespace Database\Seeders;

use App\Models\Rol;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $rol = new Rol();
        $rol->nombre = 'admin';
        $rol->save();

        $rol2 = new Rol();
        $rol2->nombre = 'paciente';
        $rol2->save();

        //Seeders for payment platforms and currecies
        $this->call(PaymentPlatformsTableSeeder::class);
        $this->call(CurrenciesTableSeeder::class);
    }
}
