import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatWithDoctorRoutingModule } from './chat-with-doctor-routing.module';
import { ChatNowComponent } from './chat-now/chat-now.component';
import { ChatWithDoctorComponent } from './chat-with-doctor.component';


@NgModule({
  declarations: [ChatNowComponent,ChatWithDoctorComponent],
  imports: [
    CommonModule,
    ChatWithDoctorRoutingModule
  ]
})
export class ChatWithDoctorModule { }
