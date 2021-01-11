import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
  identityFile2: any;
  identityFile1: any;
  Twoimgarray: any=['',''];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  @ViewChild('stepper') stepper: MatStepper;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService,
    public fb :FormBuilder) {
  
    this.getProfile();
  }

  ngOnInit() { 
    this.firstFormGroup = this.fb.group({})
    this.secondFormGroup = this.fb.group({})
    this.thirdFormGroup = this.fb.group({})
  }




  getProfile() {
    this.mainService.getProfile().then(resData => {
    console.log("IdentityProofComponent -> getProfile -> resData", resData)
      this.profileData = resData.data;
      this.Twoimgarray=resData.data.identityFile
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  onSave(stepper) {

    if(this.identityFile == ''){
      return;
    }


const data= {
  identityFile: this.Twoimgarray
}
console.log("IdentityProofComponent -> onSave -> data", data)
    
    this.mainService.updateUserprofile(data).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      stepper.next();
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }

  browseFile1(event) {
    const file = event.target.files;
    this.uploadService.upload(file).then(res => {
      this.Twoimgarray[0]= res.files[0];
     
    }).catch(error => {
      console.error('error', error);
    });
  }
  browseFile2(event) {
    const file = event.target.files;
    this.uploadService.upload(file).then(res => {
      this.Twoimgarray[1] = res.files[0];
     
    }).catch(error => {
      console.error('error', error);
    });
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }


}
