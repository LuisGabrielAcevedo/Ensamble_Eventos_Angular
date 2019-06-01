import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRouting } from './profile.routing';
import { ProfileComponent } from './profile.component';
import { ArtistSandbox } from '../../../../sandBox/artist.sandBox';

@NgModule({
  imports: [
    CommonModule,
    ProfileRouting
  ],
  declarations: [ProfileComponent],
  providers: [ArtistSandbox]
})
export class ProfileModule { }
