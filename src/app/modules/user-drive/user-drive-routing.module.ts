import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDriveComponent } from './user-drive.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';
import { MedicineOrdersComponent } from './medicine-orders/medicine-orders.component';
import { ArticlesComponent } from './articles/articles.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OnlineConsultationsComponent } from './online-consultations/online-consultations.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaidComponent } from './paid/paid.component';


const routes: Routes = [
  { path: 'drive', component: UserDriveComponent,
  children: [
    {path:'records',component:MedicalRecordsComponent},
    {path:'appointments',component:AppointmentsComponent},
    {path:'lab_tests',component:LabTestsComponent},
    {path:'orders',component:MedicineOrdersComponent},
    {path:'articles',component:ArticlesComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'consultation',component:OnlineConsultationsComponent},
    {path:'payments',component:PaymentsComponent},
    {path:'consultation/paid',component:PaidComponent},

  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDriveRoutingModule { }
