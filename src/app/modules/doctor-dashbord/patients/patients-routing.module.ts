import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsComponent } from './patients.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';


const routes: Routes = [
  {
    path:'',component:PatientsComponent
  },
  {path:'add_patient',component:AddPatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
