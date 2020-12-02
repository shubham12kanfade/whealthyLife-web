import { SharedModule } from './../../../../shared/shared.module';
import { DataSecurityComponent } from './data-security.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSecurityRoutingModule } from './data-security-routing.module';


@NgModule({
  declarations: [DataSecurityComponent],
  imports: [
    CommonModule,
    DataSecurityRoutingModule,
    SharedModule
  ]
})
export class DataSecurityModule { }
