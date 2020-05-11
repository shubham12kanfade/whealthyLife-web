import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Praco-Site';
  cookieValue: string;
  currentUrl: string;
  RouteName: any;

  constructor(router: Router, public cookies: CookieService) {
  
    this.cookieValue = this.cookies.get('token');
    console.log("AppComponent -> constructor ->  this.cookieValue",  this.cookieValue )
    
    router.events.subscribe((event) => {
      
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        // console.log("AppComponent -> constructor ->  this.currentUrl", this.currentUrl);
        this.currentUrl = this.RouteName[`${this.currentUrl}`];
      }

    });
  }


}
