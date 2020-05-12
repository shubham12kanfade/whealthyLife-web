import { DoctorDashbordModule } from './modules/doctor-dashbord/doctor-dashbord.module';
import { ChatWithDoctorComponent } from './modules/chat-with-doctor/chat-with-doctor.component';
import { BookHealthCheckupsComponent } from './modules/book-health-checkups/book-health-checkups.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorRegisterComponent } from './component/doctor-register/doctor-register.component';
import { VerifyOtpComponent } from './component/verify-otp/verify-otp.component';


const routes: Routes = [

  {path: '',loadChildren: () => import('./modules/public/public.module').then(ud => ud.PublicModule )},
  {path: 'Doctor',loadChildren: () => import('./modules/doctor-dashbord/doctor-dashbord.module').then(dd => dd.DoctorDashbordModule )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
