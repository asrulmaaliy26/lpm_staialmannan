<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\KategoriProfil;
use Illuminate\Http\Request;

class KategoriProfilController extends Controller
{
    public function index()
    {
        $kategori = KategoriProfil::all();
        return response()->json([
            'success' => true,
            'data' => $kategori
        ]);
    }

    public function show($id)
    {
        $kategori = KategoriProfil::with('profils')->find($id);

        if (!$kategori) {
            return response()->json([
                'success' => false,
                'message' => 'Kategori profil tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $kategori
        ]);
    }
}
