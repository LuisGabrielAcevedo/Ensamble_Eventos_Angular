import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats.component';
import { ChatsRoutingModule } from './chats.routing';

@NgModule({
  imports: [
    CommonModule,
    ChatsRoutingModule
  ],
  declarations: [ChatsComponent]
})
export class ChatsModule { }
