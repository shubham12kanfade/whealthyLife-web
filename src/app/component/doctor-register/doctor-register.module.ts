import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorRegisterComponent } from './doctor-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [DoctorRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class DoctorRegisterModule { }
