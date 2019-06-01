import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './edituser.component';

const routes: Routes = [{
  path: '',
  component: EditUserComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)  ],
  exports: [RouterModule],
  providers: []
})

export class EditUserRoutingModule { }
