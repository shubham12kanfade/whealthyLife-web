
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';

import { Observable } from 'rxjs/Observable';


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

  states: any;


  items: any = [];
  profileform: FormGroup;
  avatar: any;
  name = 'Angular';
  options: any = [];
  @Input() stepper: MatStepper;
  submitted: boolean = false;
  dynamicForm: FormGroup;
  seedData = [
    { degree: '', college: '', yearOfCompletion: '' },
  ]

  stateCtrl: FormControl;
  optionvalue: any;
  addFields: any;
  degrees: any;
  resultDeggree: any = [];
  newCategory: boolean = false;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public uploadService: UploadService,
    private fb: FormBuilder,
    private CookieService: CookieService) {

  

this.mainService.getDoctorEducation().then((resData)=>{
console.log("EducationComponent -> resData+++++++++++++++++++++++++", resData)
const data={ }
this.dynamicForm.value['qualificationArray'].push()
  console.log("EducationComponent -> this.dynamicForm['qualificationArray']",this.dynamicForm.value['qualificationArray'])
}).catch((err)=>{
console.log("EducationComponent -> err", err)
  
})

    this.items.length = 100;
    this.getProfile();
  }

  onSelect(e) {
    console.log("+++++++", e);
    if (this.newCategory) {
        
    }
  }
  ngOnInit() {
    this.dynamicForm = this.fb.group({
      qualificationArray: this.fb.array([])
    });
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
      qualificationId: ['', Validators.required],
      college: ['', Validators.required],
      completionYear: ['', Validators.required],

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
    this.mainService.addDoctorDegree(data).then(resData => {
      console.log("EducationComponent -> save -> resData", resData)
      this.showToast('success', 'Profile', 'Profile updated successfully');
    this.stepper.next();
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
  }
  get filtersFormArray() {
    return (<FormArray>this.dynamicForm.get('qualificationArray'));
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
this.profileform
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
  onItemAdded(itemToBeAdded) {
    console.log('Item to be added: ', itemToBeAdded);
  }


  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }
  filteredOptions: Observable<string[]>;
  check:boolean=false
  addthisdegree:any
  adddegree:any
  search(value)
  {
    const shit=this.degrees.filter(
      (val)=> val.shortName.toLowerCase().includes(value))
    if(shit.length){
     this.check=false
    }else{
    this.check=true
    this.addthisdegree=value
    }
    this.filteredOptions = this.degrees.filter(
      (val)=> val.shortName.includes(value))
  }
  onChange(){
    this.adddegree
  }
}
