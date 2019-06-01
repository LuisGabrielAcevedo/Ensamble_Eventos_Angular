import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyNotificationsRoutingModule } from './mynotifications.routing.module';
import { MyNotificationsComponent } from './mynotifications.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MyNotificationsRoutingModule
  ],
  declarations: [MyNotificationsComponent]
})
export class MyNotificationsModule { }
