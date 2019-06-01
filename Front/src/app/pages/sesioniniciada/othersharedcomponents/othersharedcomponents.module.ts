import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersharedcomponentsComponent } from './othersharedcomponents.component';
import { OtherComponentsRouting } from './othersharedcomponents.routing';


@NgModule({
  imports: [
    CommonModule,
    OtherComponentsRouting
  ],
  declarations: [ OthersharedcomponentsComponent ]
})
export class OthersharedcomponentsModule { }
