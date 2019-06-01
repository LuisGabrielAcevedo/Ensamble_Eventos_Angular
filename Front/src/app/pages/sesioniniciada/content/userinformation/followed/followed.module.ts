import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FollowedRoutingModule } from './followed.routing.module';
import { FollowedComponent } from './followed.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FollowedRoutingModule,
    SharedModule
  ],
  declarations: [FollowedComponent]
})
export class FollowedModule { }
