import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorRegisterComponent } from './doctor-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [DoctorRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [MessageService]
})
export class DoctorRegisterModule { }
