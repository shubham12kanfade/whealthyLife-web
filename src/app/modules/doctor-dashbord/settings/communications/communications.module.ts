import { CommunicationsComponent } from './communications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsRoutingModule } from './communications-routing.module';


@NgModule({
  declarations: [CommunicationsComponent],
  imports: [
    CommonModule,
    CommunicationsRoutingModule
  ]
})
export class CommunicationsModule { }
