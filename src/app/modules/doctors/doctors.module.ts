import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';


@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    SharedModule
  ]
})
export class DoctorsModule { }
