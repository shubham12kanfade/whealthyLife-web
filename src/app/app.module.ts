import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { AboutComponent } from './modules/about/about.component';
// import { BookappoimentComponent } from './modules/bookappoiment/bookappoiment.component';
import { HelpComponent } from './modules/help/help.component';
import { BooktestsComponent } from './modules/booktests/booktests.component';
import { HealthMedicineshealthComponent } from './modules/health-medicineshealth/health-medicineshealth.component';
import { DoctorRegisterComponent } from './component/doctor-register/doctor-register.component';

// import { DoctorsComponent } from './modules/doctors/doctors.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutComponent,
    // BookappoimentComponent,
    HelpComponent,
    BooktestsComponent,
    HealthMedicineshealthComponent,
    DoctorRegisterComponent,
    
    // DoctorsComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
