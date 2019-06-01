import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './database.component';
import { DataBaseRouting } from './database.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { DataBaseSandbox } from '../../../../sandBox/database.sandBox';

@NgModule({
  imports: [
    CommonModule,
    DataBaseRouting,
    ReactiveFormsModule
  ],
  declarations: [DatabaseComponent],
  providers: [DataBaseSandbox]
})
export class DatabaseModule { }
