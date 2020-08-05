import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Praco-Site';
  cookieValue: string;
  RouteName: any;

  constructor(router: Router, public cookies: CookieService) {

  }

  ngOnInit() {
    this.cookieValue = this.cookies.get('token');
    var firebaseConfig = {
      apiKey: "AIzaSyDCFNCZ83Kv9Lz5QLoR-e2PaeQDMLqmpvw",
      authDomain: "whealthylife-ae995.firebaseapp.com",
      databaseURL: "https://whealthylife-ae995.firebaseio.com",
      projectId: "whealthylife-ae995",
      storageBucket: "whealthylife-ae995.appspot.com",
      messagingSenderId: "802033719823",
      appId: "1:802033719823:web:495681b8fafb7c5885a17a",
      measurementId: "G-TB767VQ4NP"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    var message = firebase.messaging();

    message.getToken().then(rerData => {
      console.log("AppComponent -> constructor -> getToken", rerData)
    }).catch(error => {
      console.log("AppComponent -> constructor -> error", error)
    })
  }


}
