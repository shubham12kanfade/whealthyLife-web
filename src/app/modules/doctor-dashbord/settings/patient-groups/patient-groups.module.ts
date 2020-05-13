import { PatientGroupsComponent } from './patient-groups.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientGroupsRoutingModule } from './patient-groups-routing.module';


@NgModule({
  declarations: [PatientGroupsComponent],
  imports: [
    CommonModule,
    PatientGroupsRoutingModule
  ]
})
export class PatientGroupsModule { }
