import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  countryList: any = [];
  stateList: any = [];
  cityList: any = [];

  profileForm: FormGroup;
  profileData: any;
  avatar: any;
  timeZone: any;
  speciality: any;

  constructor(public mainService: MainService,
    public uploadService: UploadService,
    public messageService: MessageService
  ) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl(''),
      email: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(''),
      extraPhoneNumber: new FormControl(''),
      language: new FormControl(''),
      address: new FormControl(''),
      landmark: new FormControl(''),
      pincode: new FormControl(''),
      specialitie: new FormControl(''),
      timeZone: new FormControl(''),
      bloodGroup: new FormControl('')
    })
  }

  browseFile(event) {
    const file = event.target.files;
    this.uploadService.upload(file).then(res => {
      this.avatar = res.files[0];
    }).catch(error => {
      console.error('error', error);
    });
  }

  onSave() {
    console.log(this.profileForm.value);
    var data = {
      ...this.profileForm.value,
      avatar: this.avatar,
      location: {
        address: this.profileForm.value.address,
        landmark: this.profileForm.value.landmark,
        state: this.profileForm.value.state,
        city: this.profileForm.value.city,
        pincode: this.profileForm.value.pincode,
        country: this.profileForm.value.country,
      }
    }
    this.mainService.updateUserprofile(data).then(resData => {
      console.log("EditProfileComponent -> onSave -> resData", resData)
      this.showToast('success', 'Profile', 'Profile updated successfully');
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
    console.log("EditProfileComponent -> onSave -> data", data)
  }

  ngOnInit(): void {
    this.getCountry();
    this.getProfile();
    this.getSpeciality();
    this.getTimeZone();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileForm.patchValue({
        ...resData.data,
        dob: new Date(resData.data.dob),
        address: resData.data.location.address,
        landmark: resData.data.location.landmark,
        pincode: resData.data.location.pincode,
        state: resData.data.location.state,
        city: resData.data.location.city,
        country: resData.data.location.country
      });
      this.profileData = resData.data;
      this.avatar = resData.data.avatar
      this.getState();
      this.getCity();
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  getTimeZone() {
    this.mainService.getTimeZone().then(resData => {
      this.timeZone = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  getSpeciality() {
    this.mainService.getSpeciality().then(resData => {
      this.speciality = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  getCountry() {
    this.mainService.getCountry().then(resData => {
      this.countryList = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  getState() {
    this.mainService.getState(this.profileForm.value.country).then(resData => {
      this.stateList = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  getCity() {
    this.mainService.getCity(this.profileForm.value.state).then(resData => {
      this.cityList = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

}
