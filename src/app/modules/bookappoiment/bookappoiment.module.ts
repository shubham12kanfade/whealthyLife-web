import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { FormsModule } from '@angular/forms';
import { BookappoimentComponent } from './bookappoiment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookappoimentRoutingModule } from './bookappoiment-routing.module';
import { ChatnowComponent } from './chatnow/chatnow.component';


@NgModule({
  declarations: [ChatnowComponent,BookappoimentComponent, PatientDetailsComponent],
  imports: [
    CommonModule,
    BookappoimentRoutingModule,
    FormsModule,

  ]
})
export class BookappoimentModule { }
