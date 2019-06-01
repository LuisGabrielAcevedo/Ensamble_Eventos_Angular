import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersRouting } from "./users.routing";
import { UsersComponent } from './users.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsersRouting
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
