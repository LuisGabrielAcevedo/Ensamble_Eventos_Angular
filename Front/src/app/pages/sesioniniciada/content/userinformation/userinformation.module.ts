import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInformationRouting } from './userinformation.routing';
import { UserInformationComponent } from './userinformation.component';

// Pipes
import { PipesModule } from '../../../../pipes/pipes.module';



@NgModule({
  imports: [
    CommonModule,
    UserInformationRouting,
    PipesModule
  ],
  declarations: [UserInformationComponent]
})
export class UserInformationModule { }

