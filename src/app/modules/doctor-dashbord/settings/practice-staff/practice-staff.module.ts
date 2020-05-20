import { PracticeStaffComponent } from './practice-staff.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeStaffRoutingModule } from './practice-staff-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { AddPracticeModelComponent } from './add-practice-model/add-practice-model.component';


@NgModule({
  declarations: [PracticeStaffComponent, AddPracticeModelComponent],
  imports: [
    CommonModule,
    PracticeStaffRoutingModule,
    SharedModule
  ]
})
export class PracticeStaffModule { }
