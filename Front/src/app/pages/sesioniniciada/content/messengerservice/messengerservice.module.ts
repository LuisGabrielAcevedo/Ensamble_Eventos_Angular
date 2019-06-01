import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerserviceComponent } from './messengerservice.component';
import { MessengerServiceRouting } from './messengerservice.routing';

@NgModule({
  imports: [
    CommonModule,
    MessengerServiceRouting
  ],
  declarations: [MessengerserviceComponent]
})
export class MessengerserviceModule { }
