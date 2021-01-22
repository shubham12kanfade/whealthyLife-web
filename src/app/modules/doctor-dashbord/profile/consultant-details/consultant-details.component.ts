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
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-consultant-details',
  templateUrl: './consultant-details.component.html',
  styleUrls: ['./consultant-details.component.scss']
})
export class ConsultantDetailsComponent implements OnInit {


  columns: string[] = ['Day', 'MorningSlot', 'AfternoonSlots', 'EveningSlots', 'NightSlots'];
  dataSource = ELEMENT_DATA;

  


  dMO: boolean = false;
  dTU: boolean = false;
  dWE: boolean = false;
  dTH: boolean = false;
  dFR: boolean = false;
  dSA: boolean = false;
  dSU: boolean = false;
  timeSlot: FormGroup;
  timeSloats: any = [];
  TimeSloat2: any = [];
  doctorinfo: any;
  days: any;

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
  locationId: any;
  ClinicId: any;
  timeId: any;
  DOCClicnicId: any;
  locClinicId: any;
  timeClinicId: any;
  VisiteclinicId: any;
  LocDetail: any;

 
  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    private fb:FormBuilder,
    private  location:LocationService
   ) {
      this.memberForm = this.fb.group({
        clinicName: [''],
        ClinicName1:[''],
        address: [''],
        landmark: [''],
        country: [''],
        state: [''],
        city: [''],
        fees : [''],
        establishmentHour : [''],
        hours : [""],
        MorStart0:[""],
        MorStart1:[""],
        MorStart2:[""],
        MorStart3:[""],
        MorStart4:[""],
        MorStart5:[""],
        MorStart6:[""],
        MorEnd0:[""],
        MorEnd1:[""],
        MorEnd2:[""],
        MorEnd3:[""],
        MorEnd4:[""],
        MorEnd5:[""],
        MorEnd6:[""],
        AftStart0:[""],
        AftStart1:[""],
        AftStart2:[""],
        AftStart3:[""],
        AftStart4:[""],
        AftStart5:[""],
        AftStart6:[""],
        AftEnd0:[""],
        AftEnd1:[""],
        AftEnd2:[""],
        AftEnd3:[""],
        AftEnd4:[""],
        AftEnd5:[""],
        AftEnd6:[""],
        EveStart0:[""],
        EveStart1:[""],
        EveStart2:[""],
        EveStart3:[""],
        EveStart4:[""],
        EveStart5:[""],
        EveStart6:[""],
        EveEnd0:[""],
        EveEnd1:[""],
        EveEnd2:[""],
        EveEnd3:[""],
        EveEnd4:[""],
        EveEnd5:[""],
        EveEnd6:[""],
        NigStart0:[""],
        NigStart1:[""],
        NigStart2:[""],
        NigStart3:[""],
        NigStart4:[""],
        NigStart5:[""],
        NigStart6:[""],
        NigEnd0:[""],
        NigEnd1:[""],
        NigEnd2:[""],
        NigEnd3:[""],
        NigEnd4:[""],
        NigEnd5:[""],
        NigEnd6:[""],
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
    // this.getTime();

    this.memberForm.controls.ClinicName1.valueChanges.subscribe(resData => {
      this.clinicId= resData
      console.log("file: consultant-details.component.ts ~ line 85 ~ ConsultantDetailsComponent ~ ngOnInit ~ this.clinicId", this.clinicId)
      this.visiteClinic(resData)
    })

    this.memberForm.controls.clinicName.valueChanges.subscribe(resData => {
      this.VisiteclinicId = resData
      console.log("file: consultant-details.component.ts ~ line 85 ~ ConsultantDetailsComponent ~ ngOnInit ~ this.VisiteclinicId", this.VisiteclinicId)
      this.visiteClinic(this.VisiteclinicId)
    })
    

  }

  getLocation(){
    this.location.getPosition().subscribe(res =>{
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

  SaveSlots(){
    const data123 ={
      doctorId: this.profile._id,
      clinicId: this.ClinicId ,
      locationId: this.locationId,
      timing: [
          {
        day: "monday" ,
        morningSlot: {
          startTime : this.memberForm.controls['MorStart0'].value,
          endTime : this.memberForm.controls['MorEnd0'].value
        },
        afternoonSlot: {
          startTime: this.memberForm.controls['AftStart0'].value,
          endTime: this.memberForm.controls['AftEnd0'].value
        },
        eveningSlot: {
          startTime: this.memberForm.controls['EveStart0'].value,
          endTime: this.memberForm.controls['EveEnd0'].value,
        },
        nightSlot: {
          startTime: this.memberForm.controls['NigStart0'].value,
          endTime: this.memberForm.controls['NigEnd0'].value,
        }
       },
      {
        day: "tuesday" ,
        morningSlot: {
          startTime : this.memberForm.controls['MorStart1'].value,
          endTime : this.memberForm.controls['MorEnd1'].value
        },
        afternoonSlot: {
          startTime: this.memberForm.controls['AftStart1'].value,
          endTime: this.memberForm.controls['AftEnd1'].value
        },
        eveningSlot: {
          startTime: this.memberForm.controls['EveStart1'].value,
          endTime: this.memberForm.controls['EveEnd1'].value,
        },
        nightSlot: {
          startTime: this.memberForm.controls['NigStart1'].value,
          endTime: this.memberForm.controls['NigEnd1'].value,
        }
      },
      {
      day: "wednesday" ,
        morningSlot: {
          startTime : this.memberForm.controls['MorStart2'].value,
          endTime : this.memberForm.controls['MorEnd2'].value
        },
        afternoonSlot: {
          startTime: this.memberForm.controls['AftStart2'].value,
          endTime: this.memberForm.controls['AftEnd2'].value
        },
        eveningSlot: {
          startTime: this.memberForm.controls['EveStart2'].value,
          endTime: this.memberForm.controls['EveEnd2'].value,
        },
        nightSlot: {
          startTime: this.memberForm.controls['NigStart2'].value,
          endTime: this.memberForm.controls['NigEnd2'].value,
        }
      },
      {
        day: "thursday" ,
        morningSlot: {
          startTime : this.memberForm.controls['MorStart3'].value,
          endTime : this.memberForm.controls['MorEnd3'].value
        },
        afternoonSlot: {
          startTime: this.memberForm.controls['AftStart3'].value,
          endTime: this.memberForm.controls['AftEnd3'].value
        },
        eveningSlot: {
          startTime: this.memberForm.controls['EveStart3'].value,
          endTime: this.memberForm.controls['EveEnd3'].value,
        },
        nightSlot: {
          startTime: this.memberForm.controls['NigStart3'].value,
          endTime: this.memberForm.controls['NigEnd3'].value,
        }
      },
      {
        day: "friday" ,
        morningSlot: {
          startTime : this.memberForm.controls['MorStart4'].value,
          endTime : this.memberForm.controls['MorEnd4'].value
        },
        afternoonSlot: {
          startTime: this.memberForm.controls['AftStart4'].value,
          endTime: this.memberForm.controls['AftEnd4'].value
        },
        eveningSlot: {
          startTime: this.memberForm.controls['EveStart4'].value,
          endTime: this.memberForm.controls['EveEnd4'].value,
        },
        nightSlot: {
          startTime: this.memberForm.controls['NigStart4'].value,
          endTime: this.memberForm.controls['NigEnd4'].value,
        }
        },
       {
         day: "saturday" ,
         morningSlot: {
          startTime : this.memberForm.controls['MorStart5'].value,
          endTime : this.memberForm.controls['MorEnd5'].value
        },
        afternoonSlot: {
          startTime: this.memberForm.controls['AftStart5'].value,
          endTime: this.memberForm.controls['AftEnd5'].value
        },
        eveningSlot: {
          startTime: this.memberForm.controls['EveStart5'].value,
          endTime: this.memberForm.controls['EveEnd5'].value,
        },
        nightSlot: {
          startTime: this.memberForm.controls['NigStart5'].value,
          endTime: this.memberForm.controls['NigEnd5'].value,
        }
        },
        {
           day: "sunday" ,
           morningSlot: {
            startTime : this.memberForm.controls['MorStart6'].value,
            endTime : this.memberForm.controls['MorEnd6'].value
          },
          afternoonSlot: {
            startTime: this.memberForm.controls['AftStart6'].value,
            endTime: this.memberForm.controls['AftEnd6'].value
          },
          eveningSlot: {
            startTime: this.memberForm.controls['EveStart6'].value,
            endTime: this.memberForm.controls['EveEnd6'].value,
          },
          nightSlot: {
            startTime: this.memberForm.controls['NigStart6'].value,
            endTime: this.memberForm.controls['NigEnd6'].value,
          }
          },
      ]
    }
    console.log("ConsultantDetailsComponent -> SaveSlots -> data123", data123)
    this.mainService.addTime(data123).then(slotData =>{
      console.log("ConsultantDetailsComponent -> SaveSlots -> slotData", slotData)
      this.timeId = slotData.data._id
    }).catch(error =>{
      console.log("ConsultantDetailsComponent -> SaveSlots -> error", error)
    })
  }

  onSave(stepper: MatStepper): void {  
      if(this.profile.typeOfEstablishment === "OwnEstablishment"){
        const data ={
          name: this.memberForm.controls.clinicName.value
        }
        console.log("ConsultantDetailsComponent -> onSave -> data", data)

        this.mainService.addclinic(data).then(ClinicData =>{
          console.log("file: consultant-details.component.ts ~ line 156 ~ ConsultantDetailsComponent ~ this.mainService.addclinic ~ ClinicData", ClinicData)
          this.ClinicId = ClinicData.data._id
          const data1 ={
            clinicId: ClinicData.data._id,
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
          console.log("ConsultantDetailsComponent -> onSave -> data1", data1)
    
          this.mainService.addlocation(data1).then(locData =>{
            console.log("file: consultant-details.component.ts ~ line 175 ~ ConsultantDetailsComponent ~ this.mainService.addlocation ~ locData", locData)
            this.locationId = locData.data._id
            this.SaveSlots()
          }).catch(error =>{
            console.log("file: consultant-details.component.ts ~ line 182 ~ ConsultantDetailsComponent ~ this.mainService.addlocation ~ error", error)
          })
        
        }).catch(err =>{
          console.log("file: consultant-details.component.ts ~ line 163 ~ ConsultantDetailsComponent ~ this.mainService.addclinic ~ err", err)
        })
      }else{
        if(this.memberForm.controls.establishmentHour.value === "sameAsEstablishmentHour"){
          const memData ={
            clinicId: this.clinicId,
            locationId: this.locClinicId,
            timingId: this.timeClinicId
          }
          console.log("ConsultantDetailsComponent -> onSave -> memData", memData)
          this.mainService.addTimingVisit(memData).then(memDataTime =>{
            console.log("ConsultantDetailsComponent -> onSave -> memDataTime", memDataTime)
            this.showToast('success', 'Profile', 'Profile updated successfully');
          })
        }else{
          const memData1 ={
            clinicId: this.clinicId,
            locationId: this.locClinicId,
          }

          console.log("ConsultantDetailsComponent -> onSave -> memData1", memData1)
            this.mainService.addTimingVisit(memData1).then(memDataTime =>{
            console.log("ConsultantDetailsComponent -> onSave -> memDataTime", memDataTime)
            this.showToast('success', 'Profile', 'Profile updated successfully');
          })
        }
        
      }
       
     

      if(this.memberForm.controls.establishmentHour.value === "sameAsEstablishmentHour"){
        this.mainService.updateUserprofile(this.memberForm.value).then(resData => {
        console.log("ConsultantDetailsComponent -> onSave -> resData", resData)
          if(resData.status == 'SUCCESS'){
            this.showToast('success', 'Profile', 'Profile updated successfully');
            this.router.navigate(['/Doctor/Profile']);
          }else{
            this.showToast('Faild', 'Profile', 'Something Went Wrong');
          }
        }).catch(error => {
          console.log("EditProfileComponent -> onSave -> error", error)
        })

      }else{
        this.mainService.updateUserprofile(this.memberForm.value).then(resData => {
          if(resData.status == 'SUCCESS'){
            this.showToast('success', 'Profile', 'Profile updated successfully');
          stepper.next();
          }else{
            this.showToast('Faild', 'Profile', 'Something Went Wrong');
          }
        }).catch(error => {
          console.log("EditProfileComponent -> onSave -> error", error)
        })
      }



  }

  visiteClinic(id){
    this.mainService.getDOCClinic(id).then(DocClinic =>{
      console.log("ConsultantDetailsComponent -> ngOnInit -> DocClinic", DocClinic)
      this.DOCClicnicId = DocClinic.data[0]?.clinicId?._id
      this.locClinicId = DocClinic.data[0]?.locationId?._id
      this.timeClinicId = DocClinic.data[0]?._id
        this.LocDetail = DocClinic.data[0]?.locationId?.location
        console.log("ConsultantDetailsComponent -> visiteClinic -> this.LocDetail", this.LocDetail)
    }).catch(err =>{
      console.log("ConsultantDetailsComponent -> visiteClinic -> err", err)
    })
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

  // getTime() {
  //   this.TimeSloat = [];
    
  //   for (var i = 0; i < 24; i++) {
  //     var hour = i < 10 ? '0' + i : i;
  //     // if (i <= 13) {
  //       this.TimeSloat.push({ label: hour + ':00', value: hour + ':00' });
  //       this.TimeSloat.push({ label: hour + ':30', value: hour + ':30' });
  //       // } else {
  //         //   this.TimeSloat2.push({ label: hour + ':00', value: hour + ':00' });
  //         //   this.TimeSloat2.push({ label: hour + ':30', value: hour + ':30' });
  //         // }
  //       }
        
  //       console.log("ConsultantDetailsComponent -> getTime -> this.TimeSloat", this.TimeSloat)
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

}

export interface PeriodicElement {
  MorningSlot: string;
  AfternoonSlots: string;
  Day: any;
  EveningSlots:string;
  NightSlots:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {Day: 'MON', MorningSlot: 'Hydrogen', AfternoonSlots:'asas',EveningSlots:'dsasas',NightSlots:'asde'},
  {Day: 'TUE', MorningSlot: 'Helium', AfternoonSlots:'asas',EveningSlots:'dsasas',NightSlots:'asde'},
  {Day: 'WED', MorningSlot: 'Lithium', AfternoonSlots:'asas',EveningSlots:'dsasas',NightSlots:'asde'},
  {Day: 'THU', MorningSlot: 'Beryllium', AfternoonSlots:'asas',EveningSlots:'dsasas',NightSlots:'asde'},
  {Day: 'FRI', MorningSlot: 'Boron', AfternoonSlots:'asas',EveningSlots:'dsasas',NightSlots:'asde'},
  {Day: 'SAT', MorningSlot: 'Carbon', AfternoonSlots:'asas',EveningSlots:'dsasas',NightSlots:'asde'},
  {Day: 'SUN', MorningSlot: 'Nitrogen', AfternoonSlots:'asas',EveningSlots:'dsasas',NightSlots:'asde'},
  
];
