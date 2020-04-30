import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { AboutComponent } from './modules/about/about.component';
import { BookappoimentComponent } from './modules/bookappoiment/bookappoiment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    BookappoimentComponent,

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
