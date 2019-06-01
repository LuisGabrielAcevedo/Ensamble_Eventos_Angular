import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotosRoutingModule } from './photos.routing.module';
import { PhotosComponent } from './photos.component';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PhotosRoutingModule,
    SharedModule
  ],
  declarations: [PhotosComponent],
  providers: [ArtistSandbox]
})
export class PhotosModule { }
