import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllArtistsModule } from './allartists/allartists.module';
import { SheetMusicComponent } from './sheetmusic.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'allartists',
    pathMatch: 'full'
  },
  {
    path: 'allartists',
    component: SheetMusicComponent,
    loadChildren: './allartists/allartists.module#AllArtistsModule'
  },
  {
    path: 'searchmusicsheet/:value',
    component: SheetMusicComponent,
    loadChildren: './searchmusicsheet/searchmusicsheet.module#SearchMusicSheetModule'
  },
  {
    path: 'musicsheetinformation/:pdf',
    component: SheetMusicComponent,
    loadChildren: './musicsheetinformation/musicsheetinformation.module#MusicSheetInformationModule'
  }
];

export const SheetMusicRouting = RouterModule.forChild(routes);
