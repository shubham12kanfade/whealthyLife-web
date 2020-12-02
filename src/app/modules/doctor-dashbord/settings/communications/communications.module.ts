import { CommunicationsComponent } from './communications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsRoutingModule } from './communications-routing.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [CommunicationsComponent],
  imports: [
    CommonModule,
    CommunicationsRoutingModule,
    SharedModule
  ]
})
export class CommunicationsModule { }
