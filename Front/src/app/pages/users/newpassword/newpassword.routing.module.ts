import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewPasswordComponent} from "./newpassword.component";

const routes: Routes = [{
  path: '',
  component: NewPasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewPasswordRoutingModule { }
