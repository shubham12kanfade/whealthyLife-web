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
  treatment: any;
  addedValue: any;
  tempData: any;
  addOption: any = false;
  element1: any = [];
  treatment1: any;
  element2: any[];
  addOption1: boolean;
  tempData1: any=[];

  constructor(
    public mainService: MainService,
    public uploadService: UploadService,
    public messageService: MessageService,
    public SpecialityService: SpecialityService,
    public TreatmentsService: TreatmentsService
  ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
    this.SpecialityService.getSpecialization().then((resData) => {
      console.log("EditProfileComponent -> resData", resData);
      //
      // this.fruits=resData.data
    });

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

  onSave() {
    console.log("+++++++++++++++++", this.profileForm.value.dob.toString());
    var data = {
      ...this.profileForm.value,
      avatar: this.avatar,
      dob: this.profileForm.value.dob.toString(),
      location: {
        address: this.profileForm.value.address,
        landmark: this.profileForm.value.landmark,
        state: this.profileForm.value.state,
        city: this.profileForm.value.city,
        pincode: this.profileForm.value.pincode,
        country: this.profileForm.value.country,
      },
    };
    this.mainService
      .updateUserprofile(data)
      .then((resData) => {
        console.log("EditProfileComponent -> onSave -> resData", resData);
        this.showToast("success", "Profile", "Profile updated successfully");
      })
      .catch((error) => {
        console.log("EditProfileComponent -> onSave -> error", error);
      });
    console.log("EditProfileComponent -> onSave -> data", data);
  }

  ngOnInit(): void {
    this.getCountry();
    this.getSpeciality();
    this.getTimeZone();
    this.getProfile();
  }

  getProfile() {
    this.mainService
      .getProfile()
      .then((resData) => {
        console.log("EditProfileComponent -> getProfile -> resData", resData);
        this.profileForm.patchValue({
          ...resData.data,
          dob: resData.data.dob ? new Date(resData.data.dob) : null,
          address: resData.data.location.address,
          landmark: resData.data.location.landmark,
          pincode: resData.data.location.pincode,
          state: resData.data.location.state,
          city: resData.data.location.city,
          country: resData.data.location.country,
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

  getSpeciality() {
    this.SpecialityService.getSpecialization()
      .then((resData) => {
        this.speciality = resData.data;
        this.tempData = resData.data;
        console.log(
          "EditProfileComponent -> getSpeciality -> resData.data",
          resData.data
        );
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });

    // this.mainService.getSpeciality().then(resData => {
    //   this.speciality = resData.data;
    // }).catch(error => {
    //   console.log("EditProfileComponent -> getCountry -> error", error)
    // })
  }

  getTreatment(id) {
    console.log("EditProfileComponent -> getTreatment -> id", id.value);
    var data = {
      specializations: [],
    };
    id.value.forEach((element) => {
      data.specializations.push(element._id);
    });

    this.TreatmentsService.getTreatmentUsingSpecializetionsID(data).then(
      (ResData) => {
        console.log("EditProfileComponent -> getTreatment -> ResData", ResData);
        this.treatment = ResData.data;
        this.tempData1=ResData.data;
       
      }
    );
  }

  getResult(event) {
    console.log("EditProfileComponent -> getResult -> event", event);
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

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({
        severity: type,
        summary: messageType,
        detail: message,
      });
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.fruits.push({ shortName: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
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
    this.fruits.push({ shortName: event.option.viewValue });
    this.fruitInput.nativeElement.value = "";
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(
      (fruit) => fruit.toLowerCase().indexOf(filterValue) === 0
    );
  }

  onInput(e) {
    console.log("EditProfileComponent -> onInput -> e", e)
    this.addOption = false;
    this.speciality = this.tempData.filter((ele) =>
      ele.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (this.speciality.length === 0) {
      this.addOption = e.target.value;
    }
  }


  onInput1(e){
  console.log("EditProfileComponent -> e", e)
    console.log("EditProfileComponent -> this.treatment1", this.treatment1)
    console.log("EditProfileComponent -> tempData1", this.tempData1)
    this.addOption1 = false;
    this.treatment1 = this.tempData1.filter((ele) =>
      ele.fullName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (this.treatment1.length === 0) {
      this.addOption1 = e.target.value;
    }

  }

  onAddNew(value) {
    console.log("EditProfileComponent -> onAddNew -> value", value);

    this.TreatmentsService.newaddspecialization({ fullName: value })
      .then((resData) => {
        console.log("EditProfileComponent -> onAddNew -> resData", resData);
        this.getSpeciality();
      })
      .catch((erre) => {
        console.log("EditProfileComponent -> onAddNew -> erre", erre);
      });
  }


  onAddNew1(value) {
    console.log("EditProfileComponent -> onAddNew -> value", value);

  
  }


  onChangeSpec(e) {}

  onChanget(e) {
    this.element2 = [];
    for (let i = 0; i < e.value.length; i++) {
      const data = e.value[i]._id;

      this.element2.push(data);
    }


    const data = { specializations: this.element2 };
    const data1 = { treatmentArray: this.element2 };

    this.TreatmentsService.addDoctorTreatment(data1)
      .then((resData) => {
      console.log("EditProfileComponent -> onChanget -> resData", resData)
      
      })
      .catch((error) => {
        console.log("EditProfileComponent -> onChange -> error", error);
      });



  }

  onChange(e) {
    this.element1 = [];
    for (let i = 0; i < e.value.length; i++) {
      const data = e.value[i]._id;

      this.element1.push(data);
    }

    const data = { specializations: this.element1 };
    const data1 = { specializationArray: this.element1 };

    this.TreatmentsService.addDoctorspec(data1)
      .then((resData) => {
        this.TreatmentsService.getDoctorTreatmentbyid(data)
          .then((resdata) => {
            this.treatment1 = resdata.data;
            this.tempData1=resdata.data
          })
          .catch((err) => {
            console.log("EditProfileComponent -> onChange -> err", err);
          });
      })
      .catch((error) => {
        console.log("EditProfileComponent -> onChange -> error", error);
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
