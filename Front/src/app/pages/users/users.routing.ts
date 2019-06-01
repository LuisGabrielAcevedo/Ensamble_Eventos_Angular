import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'preregister',
    loadChildren: './preregister/preregister.module#PreregisterModule'
  },
  {
    path: 'register/:tipo',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'forgotpassword',
    loadChildren: './forgotpassword/forgotpassword.module#ForgotPasswordModule'
  },
  {
    path: 'newpassword',
    loadChildren: './newpassword/newpassword.module#NewPasswordModule'
  },
  {
    path: 'infoartista',
    loadChildren:'./infoartista/infoartista.module#InfoartistaModule'
    
  }
];

export const UsersRouting = RouterModule.forChild(routes);
