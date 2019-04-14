<?php

namespace App\Providers;

use App\User;
use App\Models\Structure;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
            Validator::extend('greater_than_field', function ($attribute, $value, $parameters, $validator) {
            $min_field = $parameters[0];
            $data = $validator->getData();
            $min_value = $data[$min_field];
            return $value > $min_value;
        });
        Validator::extend('greater_than_now', function ($attribute, $value, $parameters, $validator) {

            return $value >= date("Y-m-d");
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->bind('User', function () {
            return new User();
        });
        
        $this->app->bind('Structure', function () {
            return new Structure();
        });
    }
}
