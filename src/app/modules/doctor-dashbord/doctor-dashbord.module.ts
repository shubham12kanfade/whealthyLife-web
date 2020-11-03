import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashbordRoutingModule } from './doctor-dashbord-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChartsComponent } from './charts/charts.component';
// import { MyClinicComponent } from './my-clinic/my-clinic.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DoctorDashbordComponent, ChartsComponent

  ],
  imports: [
    CommonModule,
    DoctorDashbordRoutingModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class DoctorDashbordModule { }
