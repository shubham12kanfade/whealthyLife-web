import { CngPasswordComponent } from './../../component/cng-password/cng-password.component';
import { ForgotOtpComponent } from './../../component/forgot-otp/forgot-otp.component';
import { WalletsComponent } from './../cart/paument-cart/wallets/wallets.component';
import { PaumentCartComponent } from './../cart/paument-cart/paument-cart.component';
import { OrderSummaryComponent } from './../cart/order-summary/order-summary.component';
import { CartComponent } from './../cart/cart.component';
import { BookingAuthGuard } from './../../guard/booking-auth.guard';
import { PrivcyPolicyComponent } from './privcy-policy/privcy-policy.component';
import { MyAppointmentsComponent } from './../../component/my-appointments/my-appointments.component';
import { ForgotPasswordComponent } from './../../component/forgot-password/forgot-password.component';
import { PublicComponent } from './public.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookHealthCheckupsComponent } from '../book-health-checkups/book-health-checkups.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { DoctorRegisterComponent } from 'src/app/component/doctor-register/doctor-register.component';
import { VerifyOtpComponent } from 'src/app/component/verify-otp/verify-otp.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children: [
      { path: '', loadChildren: () => import('../../modules/home/home.module').then(h => h.HomeModule) },
      { path: 'my', loadChildren: () => import('../../modules/drive/drive.module').then(h => h.DriveModule) },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'doctor_signup', component: DoctorRegisterComponent },
      { path: 'verify_otp/:mobile', component: VerifyOtpComponent },
      { path: 'verify_otp_reg/:data', component: ForgotOtpComponent },
      { path: 'PassCgn/:data/:data2', component: CngPasswordComponent },
      { path: 'doctors', loadChildren: () => import('../../modules/doctors/doctors.module').then(dd => dd.DoctorsModule) ,canActivate:[BookingAuthGuard]},
      { path: 'doctors/:id', loadChildren: () => import('../../modules/doctors/doctors.module').then(dd => dd.DoctorsModule) ,canActivate:[BookingAuthGuard]},
      { path: 'accounts', loadChildren: () => import('../../modules/user-accounts/user-accounts.module').then(us => us.UserAccountsModule) },
      { path: 'contact', loadChildren: () => import('../../modules/contact-us/contact-us.module').then(c => c.ContactUsModule) },
      { path: 'about', loadChildren: () => import('../../modules/about/about.module').then(a => a.AboutModule) },
      { path: 'bookappointment', loadChildren: () => import('../../modules/bookappoiment/bookappoiment.module').then(b => b.BookappoimentModule) },
      { path: 'help', loadChildren: () => import('../../modules/help/help.module').then(h => h.HelpModule) },
      { path: 'booktests', loadChildren: () => import('../../modules/booktests/booktests.module').then(b => b.BooktestsModule) },
      { path: 'medicines', loadChildren: () => import('../../modules/health-medicineshealth/health-medicineshealth.module').then(m => m.HealthMedicineshealthModule) },
      { path: 'bookcheckup', component: BookHealthCheckupsComponent },
      { path: 'consult', loadChildren: () => import('../../modules/chat-with-doctor/chat-with-doctor.module').then(ch => ch.ChatWithDoctorModule) },
      { path: 'forgot_password', component: ForgotPasswordComponent },
      { path: 'appointments', component: MyAppointmentsComponent },
      { path: 'order',loadChildren: ()=> import('../../modules/order/order.module').then(or => or.OrderModule)},
      { path: 'privcyPolicy', component: PrivcyPolicyComponent
    },
    {path: 'cart', component: CartComponent},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'payment',component: PaumentCartComponent},
    {path: 'wallets',component: WalletsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
