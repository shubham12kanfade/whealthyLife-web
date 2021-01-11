import { TreatmentsService } from "./../../../../services/treatments.service";
import { SpecialityService } from "./../../../../services/speciality.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { MainService } from "src/app/services/main.service";
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from "@angular/forms";
import { UploadService } from "src/app/services/upload.service";
import { MessageService } from "primeng/api";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatAutocompleteSelectedEvent, MatAutocomplete, } from "@angular/material/autocomplete";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable } from "rxjs";
import { map, startWith, filter } from "rxjs/operators";
import { Router } from '@angular/router';
import { DataSecurityComponent } from './../../settings/data-security/data-security.component';

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
  specialitiesId: any[]=[];

  constructor(
    public mainService: MainService,
    public uploadService: UploadService,
    public messageService: MessageService,
    public SpecialityService: SpecialityService,
    public TreatmentsService: TreatmentsService,
    public  router:Router,
    public fb :FormBuilder
  ) {
      this.profileForm = fb.group({
        firstName: [''],
        lastName: [''],
        mobileNumber: [''],
        email: [''],
        gender: [''],
        dob: [''],
        specialitie: [''],
        treatment: [''],
        bloodGroup: [''],
        timeZone: [''],
        address: [''],
        landmark: [''],
        country: [''],
        state: [''],
        city: [''],
        pincode: [''],
        extraPhoneNumber: [''],
        language: ['']
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
    const file = event.target.files;
    this.uploadService
      .upload(file)
      .then((res) => {
        this.avatar = res.files[0];
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
        this.getDocspecialization();
        this.profileForm.patchValue({
          firstName: resData.data.firstName,
          lastName: resData.data.lastName,
          mobileNumber: resData.data.mobileNumber,
          email: resData.data.email,
          gender: resData.data.gender,
          dob: resData.data.dob ? new Date(resData.data.dob) : null,
          specialitie: this.specialitiesId,
          treatment: this.treatment,
          bloodGroup: resData.data.bloodGroup,
          timeZone: resData.data.timeZone,
          address: resData.data.location.address,
          landmark: resData.data.location.landmark,
          country: resData.data.location.country,
          state: resData.data.location.state,
          city: resData.data.location.city,
          pincode: resData.data.location.pincode,
          extraPhoneNumber: resData.data.extraPhoneNumber,
          language: resData.data.language
          
        });

        this.avatar= resData.data.avatar
        
       
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getProfile -> error", error);
      });

      console.log("file: edit-profile.component.ts ~ line 142 ~ EditProfileComponent ~ .then ~ this.profileForm", this.profileForm)

     
  }

  getDocspecialization(){
    this.SpecialityService.getDoctorSpecility().then(SpcData => {
      for(let i = 0; i < SpcData.data.length; i++){
        this.specialitiesId[i] = SpcData?.data[i]?.specializationId?._id
        console.log("file: edit-profile.component.ts ~ line 177 ~ EditProfileComponent ~ this.SpecialityService.getDoctorSpecility ~ this.specialitiesId[i]", this.specialitiesId[i])
      }
    }).catch(err => {
      console.log("file: edit-profile.component.ts ~ line 286 ~ EditProfileComponent ~ getDocspecialization ~ err", err)
  })
  }
 
 

  getSpeciality() {
    this.SpecialityService.getSpecialization()
      .then((resData) => {
        this.speciality = resData.data; 
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });

  }
  
  treatmentAll(){
    this.TreatmentsService.getAllTreatment()
          .then((resdata) => {
            this.treatment1 = resdata.data;
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
      console.log("file: edit-profile.component.ts ~ line 309 ~ EditProfileComponent ~ onSave ~ data1", data1)
    
      this.SpecialityService.addSpecialization(data1).then(SpecData => {
      console.log("file: edit-profile.component.ts ~ line 320 ~ EditProfileComponent ~ this.SpecialityService.addSpecialization ~ SpecData", SpecData)
    }).catch(err => {
      console.log("file: edit-profile.component.ts ~ line 276 ~ EditProfileComponent ~ this.TreatmentsService.addDoctorTreatment ~ err", err)
    })

    const data2= {
      treatmentArray: this.profileForm.controls.treatment.value
     }
    console.log("file: edit-profile.component.ts ~ line 313 ~ EditProfileComponent ~ onSave ~ data2", data2)
      
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
