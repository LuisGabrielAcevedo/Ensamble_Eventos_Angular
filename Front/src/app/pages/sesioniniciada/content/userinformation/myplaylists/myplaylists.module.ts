import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyplaylistsComponent } from './myplaylists.component';
import { MyPlaylistsRoutingModule } from './myplaylist.routing';

@NgModule({
  imports: [
    CommonModule,
    MyPlaylistsRoutingModule
  ],
  declarations: [MyplaylistsComponent]
})
export class MyplaylistsModule { }
