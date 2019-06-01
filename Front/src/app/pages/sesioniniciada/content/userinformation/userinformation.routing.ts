import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'accountsettings',
    pathMatch: 'full'
  },
  {
    path: 'followers',
    loadChildren: './followers/followers.module#FollowersModule'
  },
  {
    path: 'followed',
    loadChildren: './followed/followed.module#FollowedModule'
  },
  {
    path: 'accountsettings',
    loadChildren: './accountsettings/accountsettings.module#AccountSettingsModule'
  },
  {
    path: 'edituser',
    loadChildren: './edituser/edituser.module#EditUserModule'
  },
  {
    path: 'userprofile',
    loadChildren: './userprofile/userprofile.module#UserProfileModule'
  },
  {
    path: 'mynotifications',
    loadChildren: './mynotifications/mynotifications.module#MyNotificationsModule'
  },
  {
    path: 'myplaylists',
    loadChildren: './myplaylists/myplaylists.module#MyplaylistsModule'
  },
  {
    path: 'playlistsongs',
    loadChildren: './playlistsongs/playlistsongs.module#PlaylistsongsModule'
  }
];

export const UserInformationRouting = RouterModule.forChild(routes);
