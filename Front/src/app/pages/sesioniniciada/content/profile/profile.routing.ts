import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'information/:id',
    pathMatch:'full'
  },
  {
    path: 'information/:id',
    component: ProfileComponent,
    loadChildren: './information/information.module#InformationModule'
  },
  {
    path: 'photos/:id',
    component: ProfileComponent,
    loadChildren: './photos/photos.module#PhotosModule'
  },
  {
    path: 'songs/:id',
    component: ProfileComponent,
    loadChildren: './songs/songs.module#SongsModule'
  },
  {
    path: 'videos/:id',
    component: ProfileComponent,
    loadChildren: './videos/videos.module#VideosModule'
  },
  {
    path: 'publications/:id',
    component: ProfileComponent,
    loadChildren: './publications/publications.module#PublicationsModule'
  },
  {
    path: 'events/:id',
    component: ProfileComponent,
    loadChildren: './events/events.module#EventsModule'
  },
  {
    path: 'performances/:id',
    component: ProfileComponent,
    loadChildren: './performances/performances.module#PerformancesModule'
  },
  {
    path: 'album/:id/:idAlbum',
    component: ProfileComponent,
    loadChildren: './album/album.module#AlbumModule'
  }
];

export const ProfileRouting = RouterModule.forChild(routes);
