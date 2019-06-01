import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerformancesRoutingModule } from './performances.routing.module';
import { PerformancesComponent } from './performances.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PerformancesRoutingModule
  ],
  declarations: [PerformancesComponent]
})
export class PerformancesModule { }
