import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRouting } from './pagenotfound.routing';
import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRouting
  ],
  declarations: [PageNotFoundComponent]
})
export class PagenotfoundModule { }
