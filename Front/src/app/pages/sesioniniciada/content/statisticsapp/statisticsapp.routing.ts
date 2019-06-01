import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { StatisticsAppComponent } from "./statisticsapp.component";

export const routes: Routes = [
  {path: '', component:StatisticsAppComponent}
]

export const StatisticsAppRouting = RouterModule.forChild(routes);