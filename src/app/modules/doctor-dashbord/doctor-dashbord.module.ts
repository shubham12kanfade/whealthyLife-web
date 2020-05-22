import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashbordRoutingModule } from './doctor-dashbord-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [DoctorDashbordComponent, ChangePasswordComponent,

  ],
  imports: [
    CommonModule,
    DoctorDashbordRoutingModule,
    SharedModule
  ]
})
export class DoctorDashbordModule { }
