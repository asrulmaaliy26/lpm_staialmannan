<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\KategoriProfilController;
use App\Http\Controllers\Api\ProfilController;
use App\Http\Controllers\Api\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/settings', [HomeController::class, 'settings']);

// Auth Routes
Route::post('/login', [AuthController::class, 'login']);

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::get('/profils/{id}/download', [ProfilController::class, 'download']);
});

// Public API Kategori Profil
Route::get('/kategori-profil', [KategoriProfilController::class, 'index']);
Route::get('/kategori-profil/{id}', [KategoriProfilController::class, 'show']);

// Public API Profils
Route::get('/profils', [ProfilController::class, 'index']);
Route::get('/profils/{id}', [ProfilController::class, 'show']);

// Public API Profils by Kategori
Route::get('/kategori-profil/{id}/profils', [ProfilController::class, 'byKategori']);
