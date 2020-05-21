import { PatientGroupsComponent } from './patient-groups.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientGroupsRoutingModule } from './patient-groups-routing.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [PatientGroupsComponent],
  imports: [
    CommonModule,
    PatientGroupsRoutingModule,
    SharedModule
  ]
})
export class PatientGroupsModule { }
