import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'', redirectTo:'sesioniniciada', pathMatch:'full'},
  { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
  { path: 'pagenotfound', loadChildren: './pages/pagenotfound/pagenotfound.module#PagenotfoundModule' },
  { path: '', loadChildren: './pages/sesioniniciada/sesioniniciada.module#SesioniniciadaModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }