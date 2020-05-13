import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { AboutComponent } from './modules/about/about.component';
// import { BookappoimentComponent } from './modules/bookappoiment/bookappoiment.component';
import { HelpComponent } from './modules/help/help.component';
import { BooktestsComponent } from './modules/booktests/booktests.component';
import { HealthMedicineshealthComponent } from './modules/health-medicineshealth/health-medicineshealth.component';
import { DoctorRegisterComponent } from './component/doctor-register/doctor-register.component';
import { ApiCallService } from './services/api/apicall.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { VerifyOtpComponent } from './component/verify-otp/verify-otp.component';
import { PublicComponent } from './modules/public/public.component';
import { DoctorDashbordComponent } from './modules/doctor-dashbord/doctor-dashbord.component';



// import { DoctorsComponent } from './modules/doctors/doctors.component';


@NgModule({
  declarations: [
    AppComponent,
    
   
   

    // DoctorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
   
    HttpClientModule,
  ],
  providers: [ApiCallService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
