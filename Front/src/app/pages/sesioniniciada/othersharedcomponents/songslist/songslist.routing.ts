import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongslistComponent } from './songslist.component';

const routes: Routes = [{
  path: '',
  component: SongslistComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class SongsListRoutingModule { }
