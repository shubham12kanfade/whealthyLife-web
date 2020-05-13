import { DoctorDashbordComponent } from './doctor-dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorDashbordRoutingModule } from './doctor-dashbord-routing.module';




@NgModule({
  declarations: [DoctorDashbordComponent,
   
   ],
  imports: [
    CommonModule,
    DoctorDashbordRoutingModule
  ]
})
export class DoctorDashbordModule { }
