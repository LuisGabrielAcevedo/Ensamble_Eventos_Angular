import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicationsRoutingModule } from './publications.routing.module';
import { PublicationsComponent } from './publications.component';
import { SharedModule } from '../../../shared/shared.module';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PublicationsRoutingModule,
    SharedModule
  ],
  declarations: [PublicationsComponent],
  providers: [ArtistSandbox]
})
export class PublicationsModule { }
