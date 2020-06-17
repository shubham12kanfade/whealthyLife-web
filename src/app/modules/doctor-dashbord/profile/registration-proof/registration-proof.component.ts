import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-registration-proof',
  templateUrl: './registration-proof.component.html',
  styleUrls: ['./registration-proof.component.scss']
})
export class RegistrationProofComponent implements OnInit {
  @Input() stepper: MatStepper;

  items: any = [];
  registrationProff: any;
  profileData: any;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService) {
    this.getProfile();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileData = resData.data;
      this.registrationProff = this.profileData.registrationProff;
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  onSave() {
    this.mainService.updateUserprofile({ registrationProff: this.registrationProff }).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      this.stepper.next();
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }

  browseFile(event) {
    const file = event.target.files;
    this.uploadService.upload(file).then(res => {
      this.registrationProff = res.files[0];
    }).catch(error => {
      console.error('error', error);
    });
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

  ngOnInit() { }

}
