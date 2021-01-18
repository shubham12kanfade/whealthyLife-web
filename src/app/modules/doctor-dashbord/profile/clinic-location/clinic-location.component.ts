import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-clinic-location',
  templateUrl: './clinic-location.component.html',
  styleUrls: ['./clinic-location.component.scss']
})
export class ClinicLocationComponent implements OnInit {
  items: any = [];
  profileData: any;
  profileForm: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    public uploadService: UploadService,
    public formBuilder:FormBuilder) {
    
    this.getProfile();
  }

  ngOnInit() { 
    this.profileForm = this.formBuilder.group({
      mobileNumber: [''],
      email: [''],
      landmark: ['']
    })

    this.secondFormGroup = this.formBuilder.group({})
    this.thirdFormGroup =this.formBuilder.group({})

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
        country: this.profileData.location.country,
        isVerified: 'Yes'
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

  

}
