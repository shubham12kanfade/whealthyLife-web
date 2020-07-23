import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  items: any = [];
  profileform: FormGroup;
  avatar: any;

  @Input() stepper: MatStepper;
  submitted: boolean=false;
  

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService,
    private formBuilder: FormBuilder) {

      this.profileform = this.formBuilder.group({
        degree: new FormControl('', [Validators.required]),
      college: new FormControl('', [Validators.required]),
      experience: new FormControl('', [Validators.required]),
      yearOfCompletion: new FormControl('', [Validators.required])
      })


    // this.profileform = new FormGroup({
    //   degree: new FormControl('', [Validators.required]),
    //   college: new FormControl('', [Validators.required]),
    //   experience: new FormControl('', [Validators.required]),
    //   yearOfCompletion: new FormControl('', [Validators.required])
    // })
    this.items.length = 100;
    this.getProfile();
  }

  get f() { return this.profileform.controls; }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profileform.patchValue(resData.data);
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  onSave() {
    this.submitted = true;

    if (this.profileform.invalid) {
      return;
  }


    this.mainService.updateUserprofile(this.profileform.value).then(resData => {
      this.showToast('success', 'Profile', 'Profile updated successfully');
      this.stepper.next();
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

  ngOnInit() { }

}
