import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWithDoctorRoutingModule } from './chat-with-doctor-routing.module';
import { ChatNowComponent } from './chat-now/chat-now.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatWithDoctorComponent } from './chat-with-doctor.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [ChatNowComponent,ChatWithDoctorComponent],
  imports: [
    CommonModule,
    ChatWithDoctorRoutingModule,
    SharedModule,
    CarouselModule,
  ]
})
export class ChatWithDoctorModule { }
