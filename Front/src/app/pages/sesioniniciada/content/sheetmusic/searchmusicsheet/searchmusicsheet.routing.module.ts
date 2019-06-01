import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMusicSheetComponent } from './searchmusicsheet.component';

const routes: Routes = [{
  path: '',
  component: SearchMusicSheetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class SearchMusicSheetRoutingModule { }
