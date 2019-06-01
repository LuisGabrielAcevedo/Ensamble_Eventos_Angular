import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoartistaComponent } from './infoartista.component';
import { InfoArtistaRoutingModule } from './infoartista.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    InfoArtistaRoutingModule
  ],
  declarations: [InfoartistaComponent]
})
export class InfoartistaModule { }
