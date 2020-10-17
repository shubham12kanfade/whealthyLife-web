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
import { DesignComponent } from './component/design/design.component';
import { NotificationPopupComponent } from './component/notification-popup/notification-popup.component';

import { MyAppointmentsComponent } from './component/my-appointments/my-appointments.component'
import { SocialLoginModule, AuthService } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider  } from 'angularx-social-login';
import { ToastModule } from 'primeng/toast';



const config = new AuthServiceConfig([

  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('268964477481111')
  },

]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    MyAppointmentsComponent,
    DesignComponent,
    NotificationPopupComponent,
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    HttpClientModule,
    ToastModule,
   
    AgmCoreModule.forRoot()
  ],



  providers: [ApiCallService, CookieService, MessageService,AuthService ,

    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
