import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FollowersRoutingModule } from './followers.routing.module';
import { FollowersComponent } from './followers.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FollowersRoutingModule, 
    SharedModule
  ],
  declarations: [FollowersComponent]
})
export class FollowersModule {



  
 }
