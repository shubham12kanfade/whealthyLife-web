import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashbordRoutingModule } from './doctor-dashbord-routing.module';
import { DoctorSliderComponent } from 'src/app/component/doctor-slider/doctor-slider.component';
import { DoctorHeaderComponent } from 'src/app/component/doctor-header/doctor-header.component';
import { DoctorFooterComponent } from 'src/app/component/doctor-footer/doctor-footer.component';




@NgModule({
  declarations: [DoctorDashbordComponent,
    DoctorSliderComponent,
    DoctorHeaderComponent,
    DoctorFooterComponent,
   ],
  imports: [
    CommonModule,
    DoctorDashbordRoutingModule
  ]
})
export class DoctorDashbordModule { }
