import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicSheetInformationRoutingModule } from './musicsheetinformation.routing.module';
import { MusicSheetInformationComponent } from './musicsheetinformation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusicSheetInformationRoutingModule
  ],
  declarations: [MusicSheetInformationComponent]
})
export class MusicSheetInformationModule { }
