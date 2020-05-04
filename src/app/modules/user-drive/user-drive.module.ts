import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDriveRoutingModule } from './user-drive-routing.module';
import { UserDriveComponent } from './user-drive.component';
import { DriveHeaderComponent } from './drive-header/drive-header.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';
import { MedicineOrdersComponent } from './medicine-orders/medicine-orders.component';
import { OnlineConsultationsComponent } from './online-consultations/online-consultations.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaidComponent } from './paid/paid.component';


@NgModule({
  declarations: [UserDriveComponent, DriveHeaderComponent, MedicalRecordsComponent, AppointmentsComponent, LabTestsComponent, MedicineOrdersComponent, OnlineConsultationsComponent, ArticlesComponent, FeedbackComponent, PaymentsComponent, PaidComponent],
  imports: [
    CommonModule,
    UserDriveRoutingModule
  ]
})
export class UserDriveModule { }
