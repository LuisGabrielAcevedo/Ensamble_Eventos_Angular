import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchMusicSheetRoutingModule } from './searchmusicsheet.routing.module';
import { SearchMusicSheetComponent } from './searchmusicsheet.component';
import { PipesModule } from '../../../../../pipes/pipes.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchMusicSheetRoutingModule,
    PipesModule
  ],
  declarations: [SearchMusicSheetComponent]
})
export class SearchMusicSheetModule { }
