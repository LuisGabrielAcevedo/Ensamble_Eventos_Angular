import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheetMusicRouting } from "./sheetmusic.routing";
import { SheetMusicComponent } from './sheetmusic.component';

// pipe
import { PipesModule } from '../../../../pipes/pipes.module';



@NgModule({
  imports: [
    CommonModule,
    SheetMusicRouting,
    PipesModule
  ],
  declarations: [SheetMusicComponent]
})
export class SheetMusicModule { }
