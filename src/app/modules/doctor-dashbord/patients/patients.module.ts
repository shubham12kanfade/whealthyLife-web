import { PatientsComponent } from './patients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';


@NgModule({
  declarations: [PatientsComponent, AddPatientComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule

  ]
})
export class PatientsModule { }
