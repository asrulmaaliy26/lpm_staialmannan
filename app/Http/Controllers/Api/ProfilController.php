<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profil;
use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function index(Request $request)
    {
        $query = Profil::with('kategoriProfils');

        // Filter by category if provided
        if ($request->has('kategori_id')) {
            $query->where('kategori_profil_id', $request->kategori_id);
        }

        $profils = $query->latest()->get();

        return response()->json([
            'success' => true,
            'data' => $profils
        ]);
    }

    public function show($id)
    {
        $profil = Profil::with('kategoriProfils')->find($id);

        if (!$profil) {
            return response()->json([
                'success' => false,
                'message' => 'Profil tidak ditemukan'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $profil
        ]);
    }

    public function byKategori($kategoriId)
    {
        $profils = Profil::where('kategori_profil_id', $kategoriId)
            ->with('kategoriProfils')
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'data' => $profils
        ]);
    }

    public function download($id)
    {
        $profil = Profil::find($id);

        if (!$profil || !$profil->file_path) {
            return response()->json([
                'success' => false,
                'message' => 'Data profil atau file tidak ditemukan'
            ], 404);
        }

        $disk = \Storage::exists($profil->file_path) ? 'local' : (\Storage::disk('public')->exists($profil->file_path) ? 'public' : null);

        if (!$disk) {
            return response()->json([
                'success' => false,
                'message' => 'File fisik tidak ditemukan di server: ' . $profil->file_path
            ], 404);
        }

        $filename = \Illuminate\Support\Str::slug($profil->judul) . '.pdf';

        return \Storage::disk($disk)->download($profil->file_path, $filename, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="' . $filename . '"',
        ]);
    }
}
