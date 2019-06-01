import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreregisterComponent } from './preregister.component';
import { PreRegisterRoutingModule } from './preregister.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PreRegisterRoutingModule
  ],
  declarations: [PreregisterComponent]
})
export class PreregisterModule { }
