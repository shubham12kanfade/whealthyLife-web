import { AuthService, FacebookLoginProvider } from "angularx-social-login";
import { UserService } from "./../../services/user.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { MessageService } from "primeng/api";
import * as firebase from 'firebase';
import { AngularFireMessaging } from '@angular/fire/messaging';
// import { MessageService1 } from "../../services/message.service1";
// import { MessageService1 } from '../../services/message.service1.ts'.


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {



  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });
  singIn: boolean = false;
  Fblogin: any;
  devTok: string;
  constructor(
    private router: Router,
    public LoginService: LoginService,
    public messageService: MessageService,
    private userService: UserService,
    public authService: AuthService,
    private AngularFireMessaging: AngularFireMessaging,
    // private messageService1 : MessageService1
  ) {
    this.userService.getUserLoginStatus().subscribe((resData) => {
      if (this.userService.getUserInfo()) this.router.navigate([""]);
    });

  }
  onSubmit(): void {
    this.singIn = true;

    if (this.loginForm.invalid) {
      return;
    }

    const data = {
      ...this.loginForm.value,
      deviceToken : this.devTok
    };
    this.LoginService.loginUser(data)
      .then((resData: any) => {
        console.log("RegisterComponent -> onSubmit -> resData++++++++++++++++++++++++++++++++++++++", resData);
        if (resData.status == "SUCCESS") {
          this.userService.addUserInfo(resData.data);
        }
        if (resData.data.designation == "Doctor") {
         this.router.navigate(["/Doctor"])
        }

      })
      .catch((error) => {
        console.log("RegisterComponent -> onSubmit -> error", error);
        if (error && error.error && error.error.message) {
          this.showToast("error", "Login Faild", error.error.message);
        } else {
          this.showToast("error", "Login Faild", error.message);
        }
      });
  }
  ngOnInit() {
    // var firebaseConfig = {
    //   apiKey: "AIzaSyDCFNCZ83Kv9Lz5QLoR-e2PaeQDMLqmpvw",
    //   authDomain: "whealthylife-ae995.firebaseapp.com",
    //   databaseURL: "https://whealthylife-ae995.firebaseio.com",
    //   projectId: "whealthylife-ae995",
    //   storageBucket: "whealthylife-ae995.appspot.com",
    //   messagingSenderId: "802033719823",
    //   appId: "1:802033719823:web:495681b8fafb7c5885a17a",
    //   measurementId: "G-TB767VQ4NP"
    // };

    var firebaseConfig = {
      apiKey: "AIzaSyBBM6AZOA2OXjOEd2yYZSn2XvIABPiXMqU",
      authDomain: "whealthy-life.firebaseapp.com",
      databaseURL: "https://whealthy-life.firebaseio.com",
      projectId: "whealthy-life",
      storageBucket: "whealthy-life.appspot.com",
      messagingSenderId: "307401641913",
      appId: "1:307401641913:web:e609667c20e5032566f068",
      measurementId: "G-FDH6V18HMD"
    };



    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();



    var message = firebase.messaging();
    console.log("LoginComponent -> ngOnInit -> message", message)

    message.getToken().then(rerData => {
      console.log("AppComponent -> constructor -> getToken", rerData)
      this.devTok=rerData
      console.log("LoginComponent -> ngOnInit -> this.devTok", this.devTok)

    }).catch(error => {
      console.log("AppComponent -> constructor -> error", error)
    })
    message.onMessage((payload) => {
      console.log('Message received. ', payload);
      // ...
    })

  }



  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({
        severity: type,
        summary: messageType,
        detail: message,
      });
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((x) => {
      this.Fblogin = x;
      if (this.Fblogin) {
        console.log("LoginComponent -> signInWithFB -> this.Fblogin",this.Fblogin);
      }
      this.LoginService.loginSocial(this.Fblogin)
        .then((resData: any) => {
          this.userService.addUserInfo(resData);
        })
        .catch((error) => {
          console.log("RegisterComponent -> onSubmit -> error", error);
        });
    });
  }
}
