<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::create([
            'slug' => 'mensual',
            'price' => 25900, //259.00
            'duration_in_days' => 30
        ]);

        Plan::create([
            'slug' => 'anual',
            'price' => 279900, //2799.00
            'duration_in_days' => 365
        ]);
    }
}
