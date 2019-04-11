<?php

namespace App\Providers;

use App\User;
use App\Models\Structure;
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
