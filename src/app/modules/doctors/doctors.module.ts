
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { ToastModule } from 'primeng/toast';
import { TreatmentsComponent } from './treatments/treatments.component';
import { FeedBackPopComponent } from './feed-back-pop/feed-back-pop.component';
import { CheckingPopupComponent } from './checking-popup/checking-popup.component';




@NgModule({
  declarations: [
    DoctorsComponent,
    DoctorProfileComponent,
    TimeSlotComponent,
    NotificationPopupComponent,
    TreatmentsComponent,
    FeedBackPopComponent,
    CheckingPopupComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    SharedModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
   
  ]
})
export class DoctorsModule { }
