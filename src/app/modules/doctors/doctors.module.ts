
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimeSlotComponent } from './time-slot/time-slot.component';




@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorProfileComponent,
    TimeSlotComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    SharedModule
  ]
})
export class DoctorsModule { }
