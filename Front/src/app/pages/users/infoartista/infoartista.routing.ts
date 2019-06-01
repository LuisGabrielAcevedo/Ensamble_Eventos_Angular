import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoartistaComponent } from './infoartista.component';

const routes: Routes = [{
  path: '',
  component: InfoartistaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class InfoArtistaRoutingModule { }
