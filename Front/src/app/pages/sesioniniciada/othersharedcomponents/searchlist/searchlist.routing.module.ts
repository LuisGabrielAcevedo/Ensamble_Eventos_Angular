import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchlistComponent } from './searchlist.component';


const routes: Routes = [{
  path: '',
  component: SearchlistComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class SearchListRoutingModule { }
