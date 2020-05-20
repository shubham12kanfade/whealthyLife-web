import { PracticeStaffComponent } from './practice-staff.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeStaffRoutingModule } from './practice-staff-routing.module';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [PracticeStaffComponent],
  imports: [
    CommonModule,
    PracticeStaffRoutingModule,
    SharedModule
  ]
})
export class PracticeStaffModule { }
