<?php

namespace Database\Seeders;

use App\Models\PaymentPlatform;
use Illuminate\Database\Seeder;

class PaymentPlatformsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaymentPlatform::create([
            'name' => 'Stripe',
            'image' => env('FRONTEND_URL') . '/images/payment-platforms/stripe.jpg',
            'subscriptions_enabled' => true,
        ]);
    }
}
