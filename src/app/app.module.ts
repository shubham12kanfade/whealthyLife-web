import { CurrentLocIpService } from './services/current-loc-ip.service';
import { SharedModule } from 'src/app/shared/shared.module';
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
// import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { CngPasswordComponent } from './component/cng-password/cng-password.component';
import { AddressPopupComponent } from './modules/cart/address-popup/address-popup.component';






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
    AddressPopupComponent,

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
    // AngularFireMessagingModule,
    // AngularFireModule,
    AgmCoreModule.forRoot()
  ],



  providers:[CurrentLocIpService, ApiCallService, CookieService, MessageService,AuthService ,

    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
