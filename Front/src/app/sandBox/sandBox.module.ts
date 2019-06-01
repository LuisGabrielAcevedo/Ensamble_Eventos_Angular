import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Servicios
import { ArtistSandbox } from './artist.sandBox'
import { DataBaseSandbox } from './database.sandBox';
import { PlayerSandbox } from './player.sandBox';
import { UserSandbox } from './user.sandBox';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ArtistSandbox,
        DataBaseSandbox,
        PlayerSandbox,
        UserSandbox
    ],
    declarations: []
})
export class SandBoxModule { }