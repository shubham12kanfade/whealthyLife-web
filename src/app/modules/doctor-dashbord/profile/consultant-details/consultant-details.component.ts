import { Component, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UploadService } from 'src/app/services/upload.service';
import { MessageService } from 'primeng/api';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { UserService } from './../../../../services/user.service';
import { UserAccountsRoutingModule } from './../../../user-accounts/user-accounts-routing.module';
import { LocationService } from './../../../../services/location.service';

@Component({
  selector: 'app-consultant-details',
  templateUrl: './consultant-details.component.html',
  styleUrls: ['./consultant-details.component.scss']
})
export class ConsultantDetailsComponent implements OnInit {

  @Input() stepper: any;
  items: any = [];
  // empForm: FormGroup;
  memberForm : FormGroup;
  profileData: any;
  TimeSloat: any[];
  data12: any[];
  data:any[];
  hide: boolean = true;
  time1: any;
  ClinicName: any;
  profile: any;
  length: any;
  val: any;
  fix: { key: number; value: any; }[];
  countryList: any;
  countryId: any;
  stateList: any;
  cityList: any;
  cityId: any;
  stateId: any;
  clinicId: any;
  lat: any;
  lang: any;

 
  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    private fb:FormBuilder,
    private  location:LocationService
   ) {
      this.memberForm = this.fb.group({
        clinicName: [''],
        address: [''],
        landmark: [''],
        country: [''],
        state: [''],
        city: [''],
        fees : [''],
        establishmentHour : [''],
      })

    this.getProfile();

    this.mainService.getAllClinic().then(AllClinicName =>{
    console.log("ConsultantDetailsComponent -> AllClinicName", AllClinicName);

    const dfgf= AllClinicName.data;
    this.data = AllClinicName.data;
    console.log("ConsultantDetailsComponent -> dfgf", dfgf)

    // for( let i=0 ; i < dfgf.length ; i++ ){
    //   this.data12.push(dfgf[i]);
    //   // this.data.push(dfgf[i]);
    // }
    // console.log("ConsultantDetailsComponent ->  this.data12",  this.data12);
    //  this.data12 = AllClinicName

    }).catch(error =>{
    console.log("ConsultantDetailsComponent -> error", error);
    })

    this.getClinicName()
    this.getCountry()
    this.getLocation()
  }

  ngOnInit() { 
    this.getTime();

    this.memberForm.controls.ClinicName1.valueChanges.subscribe(resData => {
      this.clinicId= resData
      console.log("file: consultant-details.component.ts ~ line 85 ~ ConsultantDetailsComponent ~ ngOnInit ~ this.clinicId", this.clinicId)
    })
  }

  getLocation(){
    this.location.getPosition().subscribe(res =>{
      console.log("file: consultant-details.component.ts ~ line 95 ~ ConsultantDetailsComponent ~ this.location.getPosition ~ res", res)
      this.lat= res.coords.latitude
      this.lang = res.coords.longitude
    })
  }

  getCountry(){
    this.mainService
    .getCountry()
    .then((resData) => {
      this.countryList = resData.data;
    })
    .catch((error) => {
      console.log("EditProfileComponent -> getCountry -> error", error);
    });
  }

  CountryId(event){
    this.countryId =  event.value
    this.mainService
    .getState(this.countryId)
    .then((resData) => {
      this.stateList = resData.data;
    })
    .catch((error) => {
      console.log("EditProfileComponent -> getCountry -> error", error);
    });
  }

  State(event){
    this.stateId = event.value
    this.mainService
      .getCity(event.value)
      .then((resData) => {
        this.cityList = resData.data;
      })
      .catch((error) => {
        console.log("EditProfileComponent -> getCountry -> error", error);
      });
  }

  City(event){
    this.cityId = event.value
  }

  getClinicName(){
    this.mainService.getAllClinic().then(resData =>{
      console.log("file: consultant-details.component.ts ~ line 189 ~ ConsultantDetailsComponent ~ this.mainService.getAllClinic ~ resData", resData)
      this.ClinicName = resData.data
      console.log("file: consultant-details.component.ts ~ line 192 ~ ConsultantDetailsComponent ~ this.mainService.getAllClinic ~ this.ClinicName", this.ClinicName)
      
    })
  }

  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profile = resData.data
      this.memberForm.patchValue(resData.data);
      if(resData.data.typeOfEstablishment == "OwnEstablishment"){
        this.hide = false
      }else{
        this.hide = true
      }
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error);
    })
  }

  onSave(stepper: MatStepper): void {  
    
      const data ={
        name: this.memberForm.controls.clinicName.value
      }

      this.mainService.addclinic(data).then(ClinicData =>{
        console.log("file: consultant-details.component.ts ~ line 156 ~ ConsultantDetailsComponent ~ this.mainService.addclinic ~ ClinicData", ClinicData)
      }).catch(err =>{
        console.log("file: consultant-details.component.ts ~ line 163 ~ ConsultantDetailsComponent ~ this.mainService.addclinic ~ err", err)
      })

      const data1 ={
        location: {
          address: this.memberForm.controls.address.value,
          landmark: this.memberForm.controls.landmark.value,
          country: this.countryId,
          state: this.stateId,
          city: this.cityId,
          lat: this.lat,
          lng: this.lang 
        }
      }

      this.mainService.addlocation(data1).then(locData =>{
        console.log("file: consultant-details.component.ts ~ line 175 ~ ConsultantDetailsComponent ~ this.mainService.addlocation ~ locData", locData)
      }).catch(error =>{
        console.log("file: consultant-details.component.ts ~ line 182 ~ ConsultantDetailsComponent ~ this.mainService.addlocation ~ error", error)
      })
    
      if(this.memberForm.controls.establishmentHour.value === "sameAsEstablishmentHour"){
        this.mainService.updateUserprofile(this.memberForm.value).then(resData => {
          this.showToast('success', 'Profile', 'Profile updated successfully');
          this.router.navigate(['/Doctor/Profile']);
        }).catch(error => {
          console.log("EditProfileComponent -> onSave -> error", error)
        })

      }else{
        this.mainService.updateUserprofile(this.memberForm.value).then(resData => {
          this.showToast('success', 'Profile', 'Profile updated successfully');
          stepper.next();
        }).catch(error => {
          console.log("EditProfileComponent -> onSave -> error", error)
        })
      }



  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

  getTime() {
    this.TimeSloat = [];
    
    for (var i = 0; i < 24; i++) {
      var hour = i < 10 ? '0' + i : i;
      // if (i <= 13) {
        this.TimeSloat.push({ label: hour + ':00', value: hour + ':00' });
        this.TimeSloat.push({ label: hour + ':30', value: hour + ':30' });
        // } else {
          //   this.TimeSloat2.push({ label: hour + ':00', value: hour + ':00' });
          //   this.TimeSloat2.push({ label: hour + ':30', value: hour + ':30' });
          // }
        }
        
        console.log("ConsultantDetailsComponent -> getTime -> this.TimeSloat", this.TimeSloat)
  }

}
