import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchlistComponent } from './searchlist.component';
import { SearchListRoutingModule } from './searchlist.routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ArtistSandbox } from '../../../../sandBox/artist.sandBox';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SearchListRoutingModule,
    SharedModule
  ],
  declarations: [SearchlistComponent],
  providers: [ArtistSandbox]
})
export class SearchlistModule { }
