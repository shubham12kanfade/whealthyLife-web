import { Component, OnInit } from '@angular/core';
import { LocationService } from './../../services/location.service';
import { RegistrationService } from './../../services/registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MustMatch } from 'src/app/helpers/must-match.validator';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent implements OnInit {
  register: FormGroup;
  submitted = false;
  sending = false;
  locatdata: any;
  hide: boolean = false;

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
      Conpassword: ['', [Validators.required]],
      
    }, {
      validator: MustMatch('password', 'Conpassword')
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

console.log("DoctorRegisterComponent -> onSubmit -> helo")

    this.submitted = true;
    this.sending = true;
    if (this.register.invalid) {
      this.sending = false;
      return;
    }

    const data = {
      ...this.register.value,
      designation: "Doctor",
      loginType: "Password",
      location: this.locatdata
    }
    console.log("DoctorRegisterComponent -> onSubmit -> data", data)

    this.rs.registarUser(data).then(resData => {
      this.sending = false;
      if (resData.status == "SUCCESS") {
        this.router.navigateByUrl('/verify_otp/' + this.register.value.mobileNumber);
        this.register.reset();
      } else {
        this.showToast('error', 'Registration failed ', resData.data);
      }
    }).catch(error => {
      this.sending = false;
      console.log("RegisterComponent -> onSubmit -> error", error)
      if (error && error.error.message) {
        this.showToast('error', 'Registration failed ', error.error.message);
      } else {
        this.showToast('error', 'Registration failed ', error.message);
      }
    })
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }
}
