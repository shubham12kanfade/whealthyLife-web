import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { HeaderComponent } from 'src/app/component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from 'src/app/component/login/login.component';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutComponent } from '../about/about.component';
import { HelpComponent } from '../help/help.component';
import { BooktestsComponent } from '../booktests/booktests.component';
import { HealthMedicineshealthComponent } from '../health-medicineshealth/health-medicineshealth.component';
import { DoctorRegisterComponent } from 'src/app/component/doctor-register/doctor-register.component';
import { VerifyOtpComponent } from 'src/app/component/verify-otp/verify-otp.component';
import { SharedModule } from '../../shared/shared.module';
import { PrivcyPolicyComponent } from './privcy-policy/privcy-policy.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PublicComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutComponent,
    HelpComponent,
    BooktestsComponent,
    HealthMedicineshealthComponent,
    DoctorRegisterComponent,
    VerifyOtpComponent,
    PrivcyPolicyComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastModule
  ]
})
export class PublicModule { }
