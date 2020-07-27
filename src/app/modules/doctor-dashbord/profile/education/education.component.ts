import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
 
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  question = 'Would you like to add "';

  states: string[] = [
    'Arkansas',
    'California',
    'Florida',
    'Texas'
  ];

 
  items: any = [];
  profileform: FormGroup;
  avatar: any;

  @Input() stepper: MatStepper;
  submitted: boolean=false;
  

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService,
    private formBuilder: FormBuilder) {
      this.stateCtrl = new FormControl();
      this.filteredStates = this.stateCtrl.valueChanges
        .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
        );
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



  filterStates(name: string) {
    let results = this.states.filter(state =>
      state.toLowerCase().indexOf(name.toLowerCase()) === 0);

    if (results.length < 1) {
      results = [this.question + name + '"?'];
    }

    return results;
  }

  optionSelected(option) {
    console.log('optionSelected:', option.value);
    if (option.value.indexOf(this.question) === 0) {
      let newState = option.value.substring(this.question.length).split('"?')[0];
      console.log("EducationComponent -> optionSelected -> newState", newState)
      this.states.push(newState);
      this.stateCtrl.setValue(newState);
    }
  }

  enter() {
    const value = this.stateCtrl.value;
    if (!this.states.some(entry => entry === value)) {
      this.states.push(value);
    }
    setTimeout(() => this.stateCtrl.setValue(value));
  }


}
