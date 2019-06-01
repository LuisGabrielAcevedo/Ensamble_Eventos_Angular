import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsongsComponent } from './playlistsongs.component';
import { PlaylistsSongsRoutingModule } from './playlistsongs.routing';

@NgModule({
  imports: [
    CommonModule,
    PlaylistsSongsRoutingModule
  ],
  declarations: [PlaylistsongsComponent]
})
export class PlaylistsongsModule { }
