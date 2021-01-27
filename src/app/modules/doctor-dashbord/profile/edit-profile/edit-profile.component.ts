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
  specialityId: any;

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
  specialitiesId: any=[];
  treatmentId: any;
  treatmentID: any=[];
  countryId: any;
  stateid: any;
  cityid: any;

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
        avatar: [''],
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


    this.profileForm.controls.specialitie.valueChanges.subscribe(resData =>{
      this.specialityId = resData   
    })

    this.profileForm.controls.treatment.valueChanges.subscribe(resData =>{
      this.treatmentId = resData   
    })

    this.profileForm.controls.country.valueChanges.subscribe(resData =>{
      this.countryId = resData   
    })

    this.profileForm.controls.state.valueChanges.subscribe(resData =>{
      this.stateid = resData   
    })

    this.profileForm.controls.city.valueChanges.subscribe(resData =>{
        this.cityid = resData   
    })



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


  // browser(event) {
  //   console.log("EditProfileComponent -> browser -> event", event)
  //   const files = event.target.files;
  //   console.log("EditProfileComponent -> browser -> file", files)
  //   this.uploadService.upload(files).then((res) => {
  //     console.log("EditProfileComponent -> browser -> res", res)
  //       // this.profileForm.patchValue({
  //       //   filePath: res.filePath,
  //       // });
  //     })
  //     .catch((error) => {
  //       console.error("error", error);
  //     });
  // }


  getProfile() {
    this.mainService
      .getProfile()
      .then((resData) => {
      console.log("file: edit-profile.component.ts ~ line 138 ~ EditProfileComponent ~ .then ~ resData", resData)

      const profileData = resData.data
      console.log("file: edit-profile.component.ts ~ line 157 ~ EditProfileComponent ~ .then ~ profileData", profileData)
        
        this.SpecialityService.getDoctorSpecility().then(specData =>{
          for(let i = 0; i < specData.data.length; i++){
            this.specialitiesId[i] = specData.data[i].specializationId._id
          }
          this.profileForm.controls.specialitie.patchValue(this.specialitiesId)
        })

        this.TreatmentsService.getDoctreatment().then(trtData =>{
          for(let i = 0; i < trtData.data.length; i++ ){
            this.treatmentID[i] = trtData.data[i].treatmentId._id
          }
          this.profileForm.controls.treatment.patchValue(this.treatmentID) 
        })

        this.profileForm.patchValue({
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          mobileNumber: profileData.mobileNumber,
          email: profileData.email,
          gender: profileData.gender,
          dob: profileData.dob ? new Date(profileData.dob) : null,
          bloodGroup: profileData.bloodGroup,
          timeZone: profileData.timeZone,
          address: profileData.location.address,
          landmark: profileData.location.landmark,
          country:  profileData.location.country,
          state: profileData.location.state,
          city: profileData.location.city,
          pincode: profileData.location.pincode,
          extraPhoneNumber: profileData.extraPhoneNumber,
          language: profileData.language
          
        });
        this.avatar= profileData.avatar




      })
      .catch((error) => {
        console.log("EditProfileComponent -> getProfile -> error", error);
      });


     
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
      .getState(this.countryId)
      .then((resData) => {
        this.stateList = resData.data;
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });
  }

  getCity() {
    this.mainService
      .getCity(this.stateid)
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
        state: this.stateid,
        city: this.cityid,
        pincode: this.profileForm.value.pincode,
        country: this.countryId,
      },
      timeZone: this.profileForm.value.timeZone
    };
    this.mainService
      .updateUserprofile(data)
      .then((resData) => {
        this.showToast("success", "Profile", "Profile updated successfully");
        this.router.navigate(['/Doctor'])
      })
      .catch((error) => {
        console.log("EditProfileComponent -> onSave -> error", error);
      });

    const data1 ={
        specializationArray: this.specialityId
    }
      
    this.SpecialityService.addSpecialization(data1).then(SpecData => {
    }).catch(err => {
        console.log("file: edit-profile.component.ts ~ line 276 ~ EditProfileComponent ~ this.TreatmentsService.addDoctorTreatment ~ err", err)
    })

    const data2= {
      treatmentArray:  this.treatmentId 
    }
      
    this.TreatmentsService.addDoctorTreatment(data2).then(TreatData => {
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
