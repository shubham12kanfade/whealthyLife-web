import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-consultant-details',
  templateUrl: './consultant-details.component.html',
  styleUrls: ['./consultant-details.component.scss']
})
export class ConsultantDetailsComponent implements OnInit {

  @Input() stepper: any;
  items: any = [];
  profileForm: FormGroup;
  profileData: any;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router) {
    this.profileForm = new FormGroup({
      fees: new FormControl(''),
      establishmentHour: new FormControl('sameAsEstablishmentHour'),
    })
    this.getProfile();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileForm.patchValue(resData.data);
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error);
    })
  }

  onSave() {
    this.mainService.updateUserprofile(this.profileForm.value).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
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
