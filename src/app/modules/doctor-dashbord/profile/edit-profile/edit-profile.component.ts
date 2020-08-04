import { TreatmentsService } from './../../../../services/treatments.service';
import { SpecialityService } from './../../../../services/speciality.service';
import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  countryList: any = [];
  stateList: any = [];
  cityList: any = [];

  profileForm: FormGroup;
  profileData: any;
  avatar: any;
  timeZone: any;
  speciality: any;



  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: any;
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  treatment: any;


  constructor(public mainService: MainService,
    public uploadService: UploadService,
    public messageService: MessageService,
    public SpecialityService:SpecialityService,
    public TreatmentsService:TreatmentsService
  ) {

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
this.SpecialityService.getSpecialization().then((resData)=>{
console.log("EditProfileComponent -> resData", resData)
//
  // this.fruits=resData.data
})

    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      mobileNumber: new FormControl(''),
      email: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(''),
      extraPhoneNumber: new FormControl(''),
      language: new FormControl(''),
      address: new FormControl(''),
      landmark: new FormControl(''),
      pincode: new FormControl(''),
      specialitie: new FormControl(''),
      timeZone: new FormControl(''),
      bloodGroup: new FormControl(''),
      treatment: new FormControl('')
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

  onSave() {
    console.log(this.profileForm.value);
    var data = {
      ...this.profileForm.value,
      avatar: this.avatar,
      location: {
        address: this.profileForm.value.address,
        landmark: this.profileForm.value.landmark,
        state: this.profileForm.value.state,
        city: this.profileForm.value.city,
        pincode: this.profileForm.value.pincode,
        country: this.profileForm.value.country,
      }
    }
    this.mainService.updateUserprofile(data).then(resData => {
      console.log("EditProfileComponent -> onSave -> resData", resData)
      this.showToast('success', 'Profile', 'Profile updated successfully');
    }).catch(error => {
      console.log("EditProfileComponent -> onSave -> error", error)
    })
    console.log("EditProfileComponent -> onSave -> data", data)
  }

  ngOnInit(): void {
    this.getCountry();
    this.getProfile();
    this.getSpeciality();
    this.getTimeZone();
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
    console.log("EditProfileComponent -> getProfile -> resData", resData)
      this.profileForm.patchValue({
        ...resData.data,
        dob: new Date(resData.data.dob),
        address: resData.data.location.address,
        landmark: resData.data.location.landmark,
        pincode: resData.data.location.pincode,
        state: resData.data.location.state,
        city: resData.data.location.city,
        country: resData.data.location.country
      });
      this.profileData = resData.data;
      this.avatar = resData.data.avatar
      this.getState();
      this.getCity();
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error)
    })
  }

  getTimeZone() {
    this.mainService.getTimeZone().then(resData => {
      this.timeZone = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  getSpeciality() {
    this.SpecialityService.getSpecialization().then(resData => {
      this.speciality = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })

   
      // this.mainService.getSpeciality().then(resData => {
      //   this.speciality = resData.data;
      // }).catch(error => {
      //   console.log("EditProfileComponent -> getCountry -> error", error)
      // })
    

  }

  getTreatment(id){

this.TreatmentsService.getTreatmentUsingSpecializetion("5f1d8bb5985f153bd0dd6e90").then((ResData)=>{
console.log("EditProfileComponent -> getTreatment -> ResData", ResData)
this.treatment=ResData.data
})

  console.log("EditProfileComponent -> getTreatment -> id", id.target.value)
  
  }

  getCountry() {
    this.mainService.getCountry().then(resData => {
      this.countryList = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  getState() {
    this.mainService.getState(this.profileForm.value.country).then(resData => {
      this.stateList = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  getCity() {
    this.mainService.getCity(this.profileForm.value.state).then(resData => {
      this.cityList = resData.data;
    }).catch(error => {
      console.log("EditProfileComponent -> getCountry -> error", error)
    })
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({shortName:value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push({shortName:event.option.viewValue});
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  


}
