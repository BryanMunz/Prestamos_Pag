<?php

namespace App\Resolvers;

use App\Models\PaymentPlatform;
use Exception;

class PaymentPlatformResolver
{
    public function __construct()
    {
        $this->paymentPlatforms = PaymentPlatform::all();
    }

    public function resolveService($paymentPlatformID)
    {
        $name = strtolower($this->paymentPlatforms->firstWhere('id', $paymentPlatformID)->name);
        $service = config("services.{$name}.class");

        if ($service) {
            return resolve($service);
        }

        throw new Exception("The Selected Payment platform is not in the configuration", 1);
    }
}
