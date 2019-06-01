import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongsRoutingModule } from './songs.routing.module';
import { SongsComponent } from './songs.component';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SongsRoutingModule,
    SharedModule
  ],
  declarations: [SongsComponent],
  providers: [ArtistSandbox]
})
export class SongsModule { }
