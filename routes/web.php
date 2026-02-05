<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return file_get_contents(public_path('frontend/index.html'));
});

Route::fallback(function () {
    return file_get_contents(public_path('frontend/index.html'));
});
