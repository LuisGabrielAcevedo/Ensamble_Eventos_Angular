import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountSettingsRoutingModule } from './accountsettings.routing.module';
import { AccountSettingsComponent } from './accountsettings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountSettingsRoutingModule
  ],
  declarations: [AccountSettingsComponent]
})
export class AccountSettingsModule { }
