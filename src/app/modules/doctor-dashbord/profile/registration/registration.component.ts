import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  items: any = [];

  profileform: FormGroup;
  avatar: any;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService) {
    this.profileform = new FormGroup({
      registrationNumber: new FormControl(''),
      registrationCouncil: new FormControl(''),
      registrationYear: new FormControl('')
    })
    this.items.length = 28;
    this.getProfile();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileform.patchValue(resData.data);
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  onSave(next: MatStepper) {
    console.log(this.profileform.value);
    var data = {
      ...this.profileform.value,
      avatar: this.avatar,
    }
    this.mainService.updateUserprofile(data).then(resData => {
      console.log("EditProfileComponent -> onSave -> resData", resData)
      this.showToast('success', 'Profile', 'Profile updated successfully');
      next.next();
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
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

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }



  ngOnInit(): void { }
}
