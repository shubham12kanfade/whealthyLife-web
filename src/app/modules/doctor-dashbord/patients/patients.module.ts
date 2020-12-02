import { PatientsComponent } from './patients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PatientsComponent, AddPatientComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    SharedModule

  ]
})
export class PatientsModule { }
