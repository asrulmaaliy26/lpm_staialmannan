<?php

namespace App\Filament\Admin\Resources\Profils\Schemas;

use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ProfilForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('kategori_profil_id')
                    ->relationship('kategoriProfils', 'nama')
                    ->required()
                    ->live(),
                TextInput::make('judul')
                    ->required(),
                RichEditor::make('deskripsi')
                    ->columnSpanFull(),
                FileUpload::make('file_path')
                    ->directory(function (Get $get) {
                        $categoryId = $get('kategori_profil_id');
                        if ($categoryId) {
                            $category = \App\Models\KategoriProfil::find($categoryId);
                            if ($category) {
                                return 'profils/' . \Illuminate\Support\Str::slug($category->nama);
                            }
                        }
                        return 'profils/general';
                    })
                    ->required(),
            ]);
    }
}
