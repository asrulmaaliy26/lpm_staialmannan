<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriProfil extends Model
{
    use HasFactory;

    protected $fillable = ['nama', 'deskripsi'];

    public function profils()
    {
        return $this->hasMany(
            Profil::class,
            'kategori_profil_id'
        );
    }
}
