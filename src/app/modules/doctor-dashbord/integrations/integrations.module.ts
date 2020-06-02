import { SharedModule } from 'src/app/shared/shared.module';
import { IntegrationsComponent } from './integrations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationsRoutingModule } from './integrations-routing.module';
import { share } from 'rxjs/operators';
import { DriveComponent } from './drive/drive.component';
import { ConsultComponent } from './consult/consult.component';
import { PrimeComponent } from './prime/prime.component';


@NgModule({
  declarations: [IntegrationsComponent, DriveComponent, ConsultComponent, PrimeComponent],
  imports: [
    CommonModule,
    IntegrationsRoutingModule,
    SharedModule
  ]
})
export class IntegrationsModule { }
