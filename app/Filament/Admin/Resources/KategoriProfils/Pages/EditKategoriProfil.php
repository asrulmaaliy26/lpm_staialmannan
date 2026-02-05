<?php

namespace App\Filament\Admin\Resources\KategoriProfils\Pages;

use App\Filament\Admin\Resources\KategoriProfils\KategoriProfilResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditKategoriProfil extends EditRecord
{
    protected static string $resource = KategoriProfilResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
