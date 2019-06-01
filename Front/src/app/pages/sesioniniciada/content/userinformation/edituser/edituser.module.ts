import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserRoutingModule } from './edituser.routing.module';
import { EditUserComponent } from './edituser.component';

//Pipes
import { PipesModule } from '../../../../../pipes/pipes.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditUserRoutingModule,
    ReactiveFormsModule,
    PipesModule
   
  ],
  declarations: [EditUserComponent],
  
})
export class EditUserModule { }
