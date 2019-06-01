import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicSheetInformationComponent } from './musicsheetinformation.component';

 const routes: Routes = [{
  path: '',
  component: MusicSheetInformationComponent,
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MusicSheetInformationRoutingModule { }
