import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path:'',
    redirectTo:'search',
    pathMatch:'full'
  },
  {
    path: 'search/:value',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'searchlist',
    loadChildren: './searchlist/searchlist.module#SearchlistModule'
  },
  {
    path: 'songslist',
    loadChildren: './songslist/songslist.module#SongslistModule'
  },
  {
    path: 'usertable',
    loadChildren: './usertable/usertable.module#UsertableModule'
  }

];

export const OtherComponentsRouting = RouterModule.forChild(routes);
