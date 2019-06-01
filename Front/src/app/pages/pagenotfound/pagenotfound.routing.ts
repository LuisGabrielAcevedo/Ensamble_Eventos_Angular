import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./pagenotfound.component";

export const routes: Routes = [
  {path: '', component:PageNotFoundComponent}
]

export const PageNotFoundRouting = RouterModule.forChild(routes);