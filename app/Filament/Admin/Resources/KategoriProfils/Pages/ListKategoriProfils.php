<?php

namespace App\Filament\Admin\Resources\KategoriProfils\Pages;

use App\Filament\Admin\Resources\KategoriProfils\KategoriProfilResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListKategoriProfils extends ListRecords
{
    protected static string $resource = KategoriProfilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
