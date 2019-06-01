import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertableComponent } from './usertable.component';
import { UserTableRoutingModule } from './usertable.component.routing';

@NgModule({
  imports: [
    CommonModule,
    UserTableRoutingModule
  ],
  declarations: [UsertableComponent]
})
export class UsertableModule { }
