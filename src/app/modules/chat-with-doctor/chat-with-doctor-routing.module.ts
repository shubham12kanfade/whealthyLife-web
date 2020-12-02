import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWithDoctorComponent } from './chat-with-doctor.component';
import { ChatNowComponent } from './chat-now/chat-now.component';


const routes: Routes = [
  {path:'',component:ChatWithDoctorComponent},
  {path:'chatnow',component:ChatNowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatWithDoctorRoutingModule { }
