
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileRoutingModule } from './userprofile.routing.module';
import { UserProfileComponent } from './userprofile.component';
import { SharedModule } from '../../../shared/shared.module';

//Pipes
import { PipesModule } from './../../../../../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserProfileRoutingModule,
    SharedModule,
    PipesModule
  ],
  declarations: [UserProfileComponent]
})
export class UserProfileModule { }
