import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { DatabaseComponent } from "./database.component";


export const routes: Routes = [
  { path: '', component: DatabaseComponent }
]

export const DataBaseRouting = RouterModule.forChild(routes);