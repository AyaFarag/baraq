<?php

use Faker\Generator as Faker;
use App\User as User;

$factory->define(User::class, function (Faker $faker) {
    return [
        "name" => "Admin",
        "email" => "admin@admin.com",
        "role" => "0",
        "password" => bcrypt(123456),
        'remember_token' => str_random(10),
    ];
});
