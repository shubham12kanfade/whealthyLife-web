import { RegistrationService } from "./../../services/registration.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { MessageService } from "primeng/api";
import { UserService } from "src/app/services/user.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MustMatch } from "src/app/helpers/must-match.validator";
@Component({
  selector: "app-cng-password",
  templateUrl: "./cng-password.component.html",
  styleUrls: ["./cng-password.component.scss"],
})
export class CngPasswordComponent implements OnInit {
  msgs: any = [];
  msgsWarn: any = [];
  otp: number;
  error: any = false;
  mobileNumber: any;
  conPass: any;
  submitted = false;
  hide: boolean = true;
  hide1: boolean = true;
  constructor(
    public activateRouter: ActivatedRoute,
    public messageService: MessageService,
    public userService: UserService,
    public router: Router,
    public loginService: LoginService,
    public RegistrationService: RegistrationService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}
  horizontalPosition: MatSnackBarHorizontalPosition = "end";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  ngOnInit() {
    this.activateRouter.paramMap.subscribe((param: any) => {
      this.mobileNumber = param.params.data;
      console.log(
        "CngPasswordComponent -> ngOnInit ->  this.mobileNumber",
        this.mobileNumber
      );
      this.otp = param.params.data2;
      console.log("CngPasswordComponent -> ngOnInit ->  this.otp", this.otp);
      this.conPass = this.formBuilder.group(
        {
          password: ["", [Validators.required, Validators.minLength(6)]],
          confirmPassword: ["", Validators.required],
        },
        {
          validator: MustMatch("password", "confirmPassword"),
        }
      );
    });
  }

  get f() {
    return this.conPass.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.conPass.invalid) {
      return;
    }

    

    
    console.log("CngPasswordComponent -> onSubmit ->  this.conPass.password.value",  this.conPass.controls['password'].value)

    this.RegistrationService.cgnPAss({'password':this.conPass.controls['password'].value,"email": this.mobileNumber,"otp": this.otp}).then((resData)=>{
      console.log("CngPasswordComponent -> onSubmit -> resData", resData)
      this._snackBar.open('Password Successfully Changed | Please Login Again', '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['redMatch']
      });
this.router.navigate(['login'])
    }).catch(err=>{
    console.log("CngPasswordComponent -> onSubmit -> err", err)

    this._snackBar.open(err?.error?.message, '', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['redNoMatch']
    });
    })
   
   
  }
}
