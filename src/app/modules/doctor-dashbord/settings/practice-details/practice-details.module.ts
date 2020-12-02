import { PracticeDetailsComponent } from './practice-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeDetailsRoutingModule } from './practice-details-routing.module';


@NgModule({
  declarations: [PracticeDetailsComponent],
  imports: [
    CommonModule,
    PracticeDetailsRoutingModule
  ]
})
export class PracticeDetailsModule { }
