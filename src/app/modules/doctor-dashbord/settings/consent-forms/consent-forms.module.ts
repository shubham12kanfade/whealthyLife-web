import { ConsentFormsComponent } from './consent-forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentFormsRoutingModule } from './consent-forms-routing.module';


@NgModule({
  declarations: [ConsentFormsComponent],
  imports: [
    CommonModule,
    ConsentFormsRoutingModule
  ]
})
export class ConsentFormsModule { }
