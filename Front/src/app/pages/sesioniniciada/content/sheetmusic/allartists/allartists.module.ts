import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllArtistsRoutingModule } from './allartists.routing.module';
import { AllArtistsComponent } from './allartists.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AllArtistsRoutingModule
  ],
  declarations: [AllArtistsComponent]
})
export class AllArtistsModule { }
