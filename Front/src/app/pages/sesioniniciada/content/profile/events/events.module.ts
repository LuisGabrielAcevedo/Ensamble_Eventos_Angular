import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events.routing.module';
import { EventsComponent } from './events.component';
import { ArtistSandbox } from '../../../../../sandBox/artist.sandBox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ],
  declarations: [EventsComponent],
  providers: [ArtistSandbox]
})
export class EventsModule { }
