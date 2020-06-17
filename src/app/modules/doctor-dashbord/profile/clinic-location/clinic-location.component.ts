import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-clinic-location',
  templateUrl: './clinic-location.component.html',
  styleUrls: ['./clinic-location.component.scss']
})
export class ClinicLocationComponent implements OnInit {
  items: any = [];
  profileForm: FormGroup;
  profileData: any;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    public uploadService: UploadService) {
    this.profileForm = new FormGroup({
      mobileNumber: new FormControl(''),
      email: new FormControl(''),
      landmark: new FormControl(''),
    })
    this.getProfile();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileForm.patchValue({
        ...resData.data,
        landmark: resData.data.location.landmark
      });
      this.profileData = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error);
    })
  }

  onSave(staper) {
    var data = {
      ...this.profileForm.value,
      location: {
        landmark: this.profileForm.value.landmark,
        address: this.profileData.location.address,
        state: this.profileData.location.state,
        city: this.profileData.location.city,
        pincode: this.profileData.location.pincode,
        country: this.profileData.location.country
      }
    }
    this.mainService.updateUserprofile(data).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      staper.next();
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }


  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

  ngOnInit() { }

}
