import { TreatmentsService } from "./../../../../services/treatments.service";
import { SpecialityService } from "./../../../../services/speciality.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { FormGroup, FormControl, FormControlName } from "@angular/forms";
import { UploadService } from "src/app/services/upload.service";
import { MessageService } from "primeng/api";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith, filter } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
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

  languages = [
    { label: "kanada", value: "kanada" },
    { label: "English", value: "English" },
    { label: "Marathi", value: "Marathi" },
    { label: "Hindi", value: "Hindi" },
    { label: "Bengali", value: "Bengali" },
  ];

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: any;
  allFruits: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];

  @ViewChild("fruitInput") fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild("auto") matAutocomplete: MatAutocomplete;
  treatment: any[]=[];
  addedValue: any;
  tempData: any;
  addOption: any = false;
  element1: any = [];
  treatment1: any;
  element2: any[];
  addOption1: boolean;
  tempData1: any=[];
  specialitie: any[]=[];
  specializationArray: any[]=[];
  treatmentArray: any[]=[];
  data1:any;
  data2:any;
  specialityFilter: any[]=[];

  constructor(
    public mainService: MainService,
    public uploadService: UploadService,
    public messageService: MessageService,
    public SpecialityService: SpecialityService,
    public TreatmentsService: TreatmentsService,
    public  router:Router
  ) {
    // this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) =>
    //     fruit ? this._filter(fruit) : this.allFruits.slice()
    //   )
    // );
    

    this.profileForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      mobileNumber: new FormControl(""),
      email: new FormControl(""),
      country: new FormControl(""),
      state: new FormControl(""),
      city: new FormControl(""),
      dob: new FormControl(""),
      gender: new FormControl(""),
      extraPhoneNumber: new FormControl(""),
      language: new FormControl(""),
      address: new FormControl(""),
      landmark: new FormControl(""),
      pincode: new FormControl(""),
      specialitie: new FormControl(""),
      timeZone: new FormControl(""),
      bloodGroup: new FormControl(""),
      treatment: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.getProfile();
    this.getSpeciality();
    this.treatmentAll();
    this.getCountry();
    this.getTimeZone();
  }

  browseFile(event) {
    console.log("file: edit-profile.component.ts ~ line 105 ~ EditProfileComponent ~ browseFile ~ event", event)
    const file = event.target.files;
    console.log("file: edit-profile.component.ts ~ line 107 ~ EditProfileComponent ~ browseFile ~ file", file)
    this.uploadService
      .upload(file)
      .then((res) => {
        console.log("file: edit-profile.component.ts ~ line 111 ~ EditProfileComponent ~ .then ~ res", res)
        this.avatar = res.file;
        console.log("file: edit-profile.component.ts ~ line 113 ~ EditProfileComponent ~ .then ~ this.avatar", this.avatar)
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  getProfile() {
    this.mainService
      .getProfile()
      .then((resData) => {
        console.log("file: edit-profile.component.ts ~ line 134 ~ EditProfileComponent ~ .then ~ resData", resData)
        for(let i= 0; i < resData.data.specialitie.length; i++){
          this.specialitie[i] = resData.data.specialitie[i]
          console.log("file: edit-profile.component.ts ~ line 113 ~ EditProfileComponent ~ .then ~ this.specialitie[i]", this.specialitie[i])
          
        }

        for(let i= 0; i < resData.data.treatment.length; i++){
          this.treatment[i] = resData.data?.treatment[i]?._id
          console.log("file: edit-profile.component.ts ~ line 113 ~ EditProfileComponent ~ .then ~ this.specialitie[i]", this.specialitie[i])
          
        }

        this.profileForm.patchValue({
          firstName: resData.data.firstName,
          lastName: resData.data.lastName,
          mobileNumber: resData.data.mobileNumber,
          email: resData.data.email,
          gender: resData.data.gender,
          dob: resData.data.dob ? new Date(resData.data.dob) : null,
          address: resData.data.location.address,
          landmark: resData.data.location.landmark,
          pincode: resData.data.location.pincode,
          state: resData.data.location.state,
          city: resData.data.location.city,
          country: resData.data.location.country,
          specialitie:  this.specialitie,
          treatment: this.treatment,
          bloodGroup:  resData.data.bloodGroup,
          extraPhoneNumber: resData.data.extraPhoneNumber,
          language: resData.data.language,
          timeZone: resData.data.timeZone
        });
        
        this.profileData = resData.data;
        this.avatar = resData.data.avatar;
        this.getState();
        this.getCity();
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getProfile -> error", error);
      });
  }

  getSpeciality() {
    this.SpecialityService.getSpecialization()
      .then((resData) => {
        this.speciality = resData.data;
        console.log(
          "EditProfileComponent -> getSpeciality -> resData.data",
        );
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });

  }
  
  treatmentAll(){
    this.TreatmentsService.getAllTreatment()
          .then((resdata) => {
            console.log("file: edit-profile.component.ts ~ line 244 ~ EditProfileComponent ~ .then ~ resdata", resdata)
            this.treatment1 = resdata.data;
            console.log("file: edit-profile.component.ts ~ line 447 ~ EditProfileComponent ~ .then ~ this.treatment1", this.treatment1)
          })
          .catch((err) => {
            console.log("EditProfileComponent -> onChange -> err", err);
          });
  }

  getCountry() {
    this.mainService
      .getCountry()
      .then((resData) => {
        this.countryList = resData.data;
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });
  }

  getState() {
    this.mainService
      .getState(this.profileForm.value.country)
      .then((resData) => {
        this.stateList = resData.data;
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });
  }

  getCity() {
    this.mainService
      .getCity(this.profileForm.value.state)
      .then((resData) => {
        this.cityList = resData.data;
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });
  }

  getTimeZone() {
    this.mainService
      .getTimeZone()
      .then((resData) => {
        this.timeZone = resData.data;
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });
  }

  onInput(e) {

    this.speciality = this.speciality.filter((ele) =>
      ele.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (this.speciality.length === 0) {
      this.ngOnInit()
    }
  }

  onInput1(e){
      this.treatment1 = this.treatment1.filter((ele) =>
        ele.fullName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.treatment1 = []
      if (this.treatment1.length === 0) {
        this.ngOnInit()
      }
  
    }

 
  onSave() {
    console.log("+++++++++++++++++", this.profileForm.value.dob);
    var data = {
      ...this.profileForm.value,
      avatar: this.avatar,
      dob: this.profileForm.value.dob,
      location: {
        address: this.profileForm.value.address,
        landmark: this.profileForm.value.landmark,
        state: this.profileForm.value.state,
        city: this.profileForm.value.city,
        pincode: this.profileForm.value.pincode,
        country: this.profileForm.value.country,
      },
      timeZone: this.profileForm.value.timeZone
    };
    this.mainService
      .updateUserprofile(data)
      .then((resData) => {
        console.log("file: edit-profile.component.ts ~ line 292 ~ EditProfileComponent ~ .then ~ resData", resData)
        this.showToast("success", "Profile", "Profile updated successfully");
        this.router.navigate(['/Doctor'])
      })
      .catch((error) => {
        console.log("EditProfileComponent -> onSave -> error", error);
      });


    const data1 ={
      specializationArray: this.profileForm.controls.specialitie.value
    }
    console.log("file: edit-profile.component.ts ~ line 318 ~ EditProfileComponent ~ onSave ~ data1", data1)
      this.SpecialityService.addSpecialization(data1).then(SpecData => {
      console.log("file: edit-profile.component.ts ~ line 320 ~ EditProfileComponent ~ this.SpecialityService.addSpecialization ~ SpecData", SpecData)
    }).catch(err => {
      console.log("file: edit-profile.component.ts ~ line 276 ~ EditProfileComponent ~ this.TreatmentsService.addDoctorTreatment ~ err", err)
    })

    const data2= {
      treatmentArray: this.profileForm.controls.treatment.value
     }
    console.log("file: edit-profile.component.ts ~ line 328 ~ EditProfileComponent ~ onSave ~ data2", data2)
      
      this.TreatmentsService.addDoctorTreatment(data2).then(TreatData => {
      console.log("file: edit-profile.component.ts ~ line 331 ~ EditProfileComponent ~ this.TreatmentsService.addDoctorTreatment ~ TreatData", TreatData)
    }).catch(err => {
      console.log("file: edit-profile.component.ts ~ line 313 ~ EditProfileComponent ~ this.TreatmentsService.addDoctorTreatment ~ err", err)
    })

  }
 
  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({
        severity: type,
        summary: messageType,
        detail: message,
      });
    });
  }


  isNumber(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log("EditProfileComponent -> isNumber -> evt", evt);
      evt.preventDefault();
      return;
    }
    return;
  }
}
