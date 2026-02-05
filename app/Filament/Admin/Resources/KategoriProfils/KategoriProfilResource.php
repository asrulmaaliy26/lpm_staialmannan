<?php

namespace App\Filament\Admin\Resources\KategoriProfils;

use App\Filament\Admin\Resources\KategoriProfils\Pages\CreateKategoriProfil;
use App\Filament\Admin\Resources\KategoriProfils\Pages\EditKategoriProfil;
use App\Filament\Admin\Resources\KategoriProfils\Pages\ListKategoriProfils;
use App\Filament\Admin\Resources\KategoriProfils\Schemas\KategoriProfilForm;
use App\Filament\Admin\Resources\KategoriProfils\Tables\KategoriProfilsTable;
use App\Models\KategoriProfil;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class KategoriProfilResource extends Resource
{
    protected static ?string $model = KategoriProfil::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'nama';

    public static function form(Schema $schema): Schema
    {
        return KategoriProfilForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return KategoriProfilsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListKategoriProfils::route('/'),
            'create' => CreateKategoriProfil::route('/create'),
            'edit' => EditKategoriProfil::route('/{record}/edit'),
        ];
    }
}
