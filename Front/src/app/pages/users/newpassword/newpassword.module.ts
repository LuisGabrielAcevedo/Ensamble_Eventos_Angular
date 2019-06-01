import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewPasswordRoutingModule } from './newpassword.routing.module';
import { NewPasswordComponent } from './newpassword.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewPasswordRoutingModule
  ],
  declarations: [NewPasswordComponent]
})
export class NewPasswordModule { }
