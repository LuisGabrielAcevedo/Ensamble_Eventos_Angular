import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsongsComponent } from './playlistsongs.component';

const routes: Routes = [{
  path: '',
  component: PlaylistsongsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class PlaylistsSongsRoutingModule { }
