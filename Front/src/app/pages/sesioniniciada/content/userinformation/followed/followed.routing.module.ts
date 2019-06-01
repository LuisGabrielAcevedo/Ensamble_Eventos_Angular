import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowedComponent } from './followed.component';

const routes: Routes = [{
  path: '',
  component: FollowedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class FollowedRoutingModule { }
