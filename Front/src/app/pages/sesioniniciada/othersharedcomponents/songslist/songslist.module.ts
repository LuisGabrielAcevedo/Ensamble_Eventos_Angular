import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongslistComponent } from './songslist.component';
import { SharedModule } from '../../shared/shared.module';
import { SongsListRoutingModule } from './songslist.routing';
import { PlayerSandbox } from '../../../../sandBox/player.sandBox';

@NgModule({
  imports: [
    CommonModule,
    SongsListRoutingModule,
    SharedModule
  ],
  declarations: [SongslistComponent],
  providers:[PlayerSandbox]
})
export class SongslistModule { }
