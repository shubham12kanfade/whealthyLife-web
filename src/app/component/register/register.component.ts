
import { LocationService } from './../../services/location.service';
import { RegistrationService } from './../../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  submitted = false;
  locatdata: any;
  sending: boolean = false;

  constructor(public rs: RegistrationService,
    public LocationService: LocationService,
    private router: Router,
    public messageService: MessageService,
    private formBuilder: FormBuilder) {
    this.getLocation();
  }

  get f() { return this.register.controls; }

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getLocation() {
    this.LocationService.getPosition().subscribe((pos: Position) => {
      this.locatdata = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }
    })
  }

  onSubmit() {
    this.sending = true;
    this.submitted = true;
    if (this.register.invalid) {
      this.sending = false;
      return;
    }
    const data = {
      ...this.register.value,
      designation: "User",
      loginType: "Password",
      location: this.locatdata,
    }
    this.rs.registarUser(data).then(resData => {
    console.log("RegisterComponent -> onSubmit -> resData", resData)
      this.sending = false;
      if (resData.status == "SUCCESS") {
        this.router.navigate(['/verify_otp', this.register.value.mobileNumber]);
      } else {
        this.showToast('error', 'Faild', 'Somthinge went wrong please try after some time');
      }
      this.register.reset();
    }).catch(error => {
    this.sending = false;
      console.log("RegisterComponent -> onSubmit -> error", error)
  
  
      // error:
      // code: 505
      // message: "You have already registerd with us please login to continue"
      // status: "ERROR"
  
  
  
       if (error && error.error && error.error.message) {
        this.showToast('error', 'Faild', error.error.message);
      } else {
        this.showToast('error', 'Faild', error.message);
      }
    })
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }
}
