import { TimeSlotComponent } from './time-slot/time-slot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorsComponent } from './doctors.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { TreatmentsComponent } from './treatments/treatments.component';


const routes: Routes = [
  { path: '', component: DoctorsComponent },
  { path: 'doctor_profile/:id', component: DoctorProfileComponent },
  { path: 'timeSlot/:id', component: TimeSlotComponent },
  { path: 'treatments/:id', component: TreatmentsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { 
  
}
