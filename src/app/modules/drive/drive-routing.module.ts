import { DoctorhistoryComponent } from './doctorhistory/doctorhistory.component';
import { ChatsComponent } from './chats/chats.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentsComponent } from './payments/payments.component';
import { ArticlesComponent } from './articles/articles.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { OrdersComponent } from './orders/orders.component';
import { TestsComponent } from './tests/tests.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { RecordComponent } from './record/record.component';
import { DriveComponent } from './drive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: DriveComponent, children: [
      {
        path: '', redirectTo: 'record', pathMatch: 'full'
      },
      {
        path: 'record', component: RecordComponent
      },
      {
        path: 'appointments', component: AppointmentsComponent
      },

      {
        path: 'history', component: DoctorhistoryComponent
      },
      {
        path: 'Tests', component: TestsComponent
      },
      {
        path: 'Orders', component: OrdersComponent
      },
      {
        path: 'Consultations', component: ConsultationsComponent
      },
      {
        path: 'Articles', component: ArticlesComponent
      },
      {
        path: 'Feedback', component: FeedbackComponent
      },
      {
        path: 'Payments', component: PaymentsComponent
      },
      {
        path: 'Chat', component: ChatsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriveRoutingModule { }
