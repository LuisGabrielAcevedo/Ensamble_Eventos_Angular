import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';

// Pipe Module
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    SharedModule,
    PipesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }