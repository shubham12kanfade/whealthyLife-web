import { AuthService, FacebookLoginProvider } from "angularx-social-login";
import { UserService } from "./../../services/user.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { MessageService } from "primeng/api";

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
  constructor(
    private router: Router,
    public LoginService: LoginService,
    public messageService: MessageService,
    private userService: UserService,
    public authService: AuthService
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
  ngOnInit(): void {}

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
        console.log("LoginComponent -> signInWithFB -> this.Fblogin");
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
