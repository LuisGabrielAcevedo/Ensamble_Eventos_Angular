import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNotificationsComponent } from './mynotifications.component';

const routes: Routes = [{
  path: '',
  component: MyNotificationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MyNotificationsRoutingModule { }
