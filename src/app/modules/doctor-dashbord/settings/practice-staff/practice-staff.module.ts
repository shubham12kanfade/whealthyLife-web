import { PracticeStaffComponent } from './practice-staff.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeStaffRoutingModule } from './practice-staff-routing.module';


@NgModule({
  declarations: [PracticeStaffComponent],
  imports: [
    CommonModule,
    PracticeStaffRoutingModule
  ]
})
export class PracticeStaffModule { }
