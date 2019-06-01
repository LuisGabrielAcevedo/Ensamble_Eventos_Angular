import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsAppRouting } from './statisticsapp.routing';
import { StatisticsAppComponent } from './statisticsapp.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsAppRouting
  ],
  declarations: [StatisticsAppComponent]
})
export class StatisticsAppModule { }