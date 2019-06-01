import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { PartituraFilterPipe } from './partituraFilter.pipe';



@NgModule({
  imports: [
  ],
  declarations: [
    ImagenPipe,
    PartituraFilterPipe
  ],
  exports:
  [
    ImagenPipe,
    PartituraFilterPipe
  ]
})
export class PipesModule { }
