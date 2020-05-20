import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  })
  singIn: boolean = false;
  constructor(private router: Router, public LoginService: LoginService, private userService: UserService) {
    this.userService.getUserLoginStatus().subscribe(resData => {
      if (this.userService.getUserInfo())
        this.router.navigate(['']);
    })
  }
  onSubmit(): void {
    this.singIn = true;

    if (this.loginForm.invalid) {
      return;
    }

    const data = {
      ...this.loginForm.value,
      designation: "Admin",
    }
    this.LoginService.loginUser(data).then((resData: any) => {
      console.log("RegisterComponent -> onSubmit -> resData", resData)
      if (resData.status == "SUCCESS") {
        this.userService.addUserInfo(resData.data);
      }
    }).catch(error => {
      console.log("RegisterComponent -> onSubmit -> error", error)

    })
  }
  ngOnInit(): void {
  }


}
