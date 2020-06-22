import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-identity-proof',
  templateUrl: './identity-proof.component.html',
  styleUrls: ['./identity-proof.component.scss']
})
export class IdentityProofComponent implements OnInit {
  items: any = [];
  identityFile: any;
  profileData: any;
  submitted: boolean =false;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService) {
    this.getProfile();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileData = resData.data;
      this.identityFile = this.profileData.identityFile;
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  onSave(stepper) {

    // if(this.identityFile= !''){
    //   this.submitted= true;
    // }

    this.mainService.updateUserprofile({ identityFile: this.identityFile }).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      stepper.next();
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }

  browseFile(event) {
    const file = event.target.files;
    this.uploadService.upload(file).then(res => {
      this.identityFile = res.files[0];
     
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
