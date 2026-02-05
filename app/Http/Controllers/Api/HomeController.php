<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function settings()
    {
        $path = 'settings/homepage.json';

        // Data default jika file tidak ada
        $defaultData = [
            'alamat' => 'Gedung Rektorat Utama Lt. 2, Kampus STAIMAN',
            'email' => 'lpm@staiman.ac.id',
            'telepon' => '(0321) 888 1234',
            'jam_kerja' => 'Senin - Jumat, 08:00 - 16:00 WIB',
            'maps_url' => 'https://maps.google.com',
            'social_facebook' => 'https://facebook.com/lpmstaiman',
            'social_instagram' => 'https://instagram.com/lpmstaiman',
            'social_twitter' => 'https://twitter.com/lpmstaiman',
            'social_youtube' => 'https://youtube.com/lpmstaiman'
        ];

        if (!Storage::exists($path)) {
            // Buat folder jika belum ada
            if (!Storage::exists('settings')) {
                Storage::makeDirectory('settings');
            }
            Storage::put($path, json_encode($defaultData, JSON_PRETTY_PRINT));
        }

        $settings = json_decode(Storage::get($path), true);

        return response()->json([
            'success' => true,
            'data' => $settings
        ]);
    }
}
