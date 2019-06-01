import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InformationRoutingModule } from './information.routing.module';
import { InformationComponent } from './information.component';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { PipesModule } from '../../../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InformationRoutingModule,
    PipesModule
  ],
  declarations: [InformationComponent],
  providers: [ArtistSandbox]
})
export class InformationModule { }
