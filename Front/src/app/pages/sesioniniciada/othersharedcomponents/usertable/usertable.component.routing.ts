import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsertableComponent } from './usertable.component';

const routes: Routes = [{
  path: '',
  component: UsertableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class UserTableRoutingModule { }