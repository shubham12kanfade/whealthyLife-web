import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-clinic',
  templateUrl: './connect-clinic.component.html',
  styleUrls: ['./connect-clinic.component.scss']
})
export class ConnectClinicComponent implements OnInit {
  items: any = [];
  profileform: FormGroup;
  avatar: any;

  @Input() stepper: MatStepper;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    public uploadService: UploadService) {
    this.profileform = new FormGroup({
      typeOfEstablishment: new FormControl('')
    })
    this.items.length = 100;
    this.getProfile();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileform.patchValue(resData.data);
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  onSave() {
    this.mainService.updateUserprofile(this.profileform.value).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      this.stepper.next();
      this.router.navigate(['/Doctor/Profile']);
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