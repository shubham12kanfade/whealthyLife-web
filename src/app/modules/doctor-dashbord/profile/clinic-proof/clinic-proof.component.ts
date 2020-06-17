import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-proof',
  templateUrl: './clinic-proof.component.html',
  styleUrls: ['./clinic-proof.component.scss']
})
export class ClinicProofComponent implements OnInit {

  @Input() stepper: MatStepper;

  items: any = [];
  establishmentProff: any;
  profileData: any;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    public uploadService: UploadService) {
    this.getProfile();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileData = resData.data;
      this.establishmentProff = this.profileData.establishmentProff;
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error);
    })
  }

  onSave() {
    this.mainService.updateUserprofile({ establishmentProff: this.establishmentProff }).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      this.stepper.next();
      this.router.navigate(['/Doctor/Profile/']);
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }

  browseFile(event) {
    const file = event.target.files;
    this.uploadService.upload(file).then(res => {
      this.establishmentProff = res.files[0];
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
