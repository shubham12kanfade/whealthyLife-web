import { BookappoimentComponent } from './bookappoiment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookappoimentRoutingModule } from './bookappoiment-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@NgModule({
  declarations: [PatientDetailsComponent,BookappoimentComponent],
  imports: [
    CommonModule,
    BookappoimentRoutingModule
  ]
})
export class BookappoimentModule { }
