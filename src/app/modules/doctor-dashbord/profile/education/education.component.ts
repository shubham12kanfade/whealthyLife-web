import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
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

  degree: FormControl;
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
  submitted: boolean = false;
  dynamicForm: FormGroup;
  seedData = [


    { degree: '', college: '', yearOfCompletion: '' },

  ]



  stateCtrl: FormControl;
  optionvalue: any;
  addFields: any;



  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService,
    private fb: FormBuilder,
    private CookieService: CookieService) {

    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );



    this.items.length = 100;
    this.getProfile();
  }





  ngOnInit() {
    this.dynamicForm = this.fb.group({
      filters: this.fb.array([])
    });

    // Uncomment the line below If you want to seed the Form with some data
    this.seedFiltersFormArray();
  }

  seedFiltersFormArray() {
    this.seedData.forEach(seedDatum => {
      const formGroup = this.createFilterGroup();

      formGroup.patchValue(seedDatum);
      this.filtersFormArray.push(formGroup);
    });
  }

  createFilterGroup() {
    return this.fb.group({
      degree: ['', Validators.required],
      college: ['', Validators.required],
      yearOfCompletion: ['', Validators.required],

    });
  }

  addFilterToFiltersFormArray() {
    this.filtersFormArray.push(this.createFilterGroup());
    console.log("EducationComponent -> addFilterToFiltersFormArray -> filtersFormArray", this.filtersFormArray.value)
  }

  removeFilterFromFiltersFormArray(index) {
    this.filtersFormArray.removeAt(index);
  }

  selectedAPIChanged(i) {
    this.getFilterGroupAtIndex(i).addControl('value', this.getFormControl());
  }

  getFormControl() {
    return this.fb.control(null);
  }

  save() {
    this.submitted = true;


    const user = JSON.parse(this.CookieService.get('userInfo_WhealthyLife'))
    console.log("EducationComponent -> save -> user", user)


    const data = {

      ...this.dynamicForm.value,
    }
    console.log("EducationComponent -> save -> data", data)


    this.mainService.addDegree(data).then(resData => {
      console.log("EducationComponent -> save -> resData", resData)
      this.showToast('success', 'Profile', 'Profile updated successfully');
      this.stepper.next();
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }

  get filtersFormArray() {
    return (<FormArray>this.dynamicForm.get('filters'));
  }

  getFilterGroupAtIndex(index) {
    return (<FormGroup>this.filtersFormArray.at(index));
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



  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

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
    this.optionvalue = option.value

    if (option.value.indexOf(this.question) === 0) {
      let newState = option.value.substring(this.question.length).split('"?')[0];
      this.states.push(newState);
      this.stateCtrl.setValue(newState);
    }
  }

  enter(event) {
    const value = event.target.value;
    console.log("EducationComponent -> enter -> value", value, this.states, this.filteredStates);
    var filterValue = this.states.filter(entry => entry.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    console.log("EducationComponent -> enter -> filterValue", filterValue)
    if (filterValue.length == 0) {
      // this.states.push(value);
      // this.stateCtrl.setValue(event.target.value);
      this.addFields = event.target.value;
    } else {
      this.addFields = null;
    }
    // setTimeout(() => this.stateCtrl.setValue(value));
  }




  onAddFields(){

  }


}
