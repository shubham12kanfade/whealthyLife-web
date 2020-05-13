// import { SettingsSidebarComponent } from './../../../component/settings-sidebar/settings-sidebar.component';
import { SettingsComponent } from './settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';





@NgModule({
  declarations: [SettingsComponent,
     SettingsSidebarComponent,
    ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
