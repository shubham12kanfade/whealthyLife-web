import { PrintoutsComponent } from './printouts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintoutsRoutingModule } from './printouts-routing.module';


@NgModule({
  declarations: [PrintoutsComponent],
  imports: [
    CommonModule,
    PrintoutsRoutingModule
  ]
})
export class PrintoutsModule { }
