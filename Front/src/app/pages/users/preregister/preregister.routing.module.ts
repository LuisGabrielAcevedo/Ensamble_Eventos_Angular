import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreregisterComponent } from './preregister.component';


const routes: Routes = [{
  path: '',
  component:PreregisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PreRegisterRoutingModule { }
