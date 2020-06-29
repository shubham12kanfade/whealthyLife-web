import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiCallService } from './services/api/apicall.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component'
import { MessageService } from 'primeng/api';
import { MyAppointmentsComponent } from './component/my-appointments/my-appointments.component';
import { DesignComponent } from './component/design/design.component';
import { NotificationPopupComponent } from './component/notification-popup/notification-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    MyAppointmentsComponent,
    DesignComponent,
    NotificationPopupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    HttpClientModule,
    AgmCoreModule.forRoot()
  ],
  providers: [ApiCallService, CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
