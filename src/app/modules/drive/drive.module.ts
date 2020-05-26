import { DriveComponent } from './drive.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriveRoutingModule } from './drive-routing.module';
import { RecordComponent } from './record/record.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TestsComponent } from './tests/tests.component';
import { OrdersComponent } from './orders/orders.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentsComponent } from './payments/payments.component';
import { SharedModule } from './../../shared/shared.module';
import { UploadRecordsComponent } from './upload-records/upload-records.component';

@NgModule({
  declarations: [
    DriveComponent,
    RecordComponent,
    AppointmentsComponent,
    TestsComponent,
    OrdersComponent,
    ConsultationsComponent,
    ArticlesComponent,
    FeedbackComponent,
    PaymentsComponent,
    UploadRecordsComponent,
  ],


  imports: [
    CommonModule,
    DriveRoutingModule,
    SharedModule
  ]
})
export class DriveModule { }
