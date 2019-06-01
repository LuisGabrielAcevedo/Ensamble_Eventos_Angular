import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllArtistsComponent } from './allartists.component';

const routes: Routes = [{
  path: '',
  component: AllArtistsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class AllArtistsRoutingModule { }
