import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideosRoutingModule } from './videos.routing.module';
import { VideosComponent } from './videos.component';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VideosRoutingModule
  ],
  declarations: [VideosComponent],
  providers:[ArtistSandbox]
})
export class VideosModule { }
