import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyplaylistsComponent } from './myplaylists.component';

const routes: Routes = [{
  path: '',
  component: MyplaylistsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MyPlaylistsRoutingModule { }
