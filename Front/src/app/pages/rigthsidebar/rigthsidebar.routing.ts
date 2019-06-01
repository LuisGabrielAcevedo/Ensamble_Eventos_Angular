import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { RigthsidebarComponent } from "./rigthsidebar.component";


export const routes: Routes = [
  {
    path: '',
    component: RigthsidebarComponent
  },
];

export const RigthsidebarRouting = RouterModule.forChild(routes);
