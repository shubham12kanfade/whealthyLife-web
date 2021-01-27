import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

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
  clinicList: any[]=[];
  displayedColumns = [];
  dataSource1;
  displayedRows: [string, unknown][];
  DocClinic: any;
  hide1: boolean = true;
  ClinicDetails: any;
  IdClinic: any;
  IdLocation: any;
  IdTime: any;
  DoctorId: any;


 
  constructor(public mainService: MainService,
    public messageService: MessageService,
    public router: Router,
    private fb:FormBuilder,
    public dialog: MatDialog,
    private  location:LocationService
   ) {
     
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


    this.displayedColumns = [
      "Sr_No",
      "Clinic_Name",
      "Address",
      "Action",
    ];
   
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() { 
    // this.getTime();

    this.memberForm = this.fb.group({
      inputClinic: [''],
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

    this.memberForm.controls.ClinicName1.valueChanges.subscribe((resData) => {
      this.clinicId= resData
      console.log("file: consultant-details.component.ts ~ line 85 ~ ConsultantDetailsComponent ~ ngOnInit ~ this.clinicId", this.clinicId)
      this.visiteClinic(resData)
    })

    this.memberForm.controls.clinicName.valueChanges.subscribe((resData) => {
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
      .getCity(this.stateId)
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
      
       this.getDocClinic(this.profile._id);
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

  getDocClinic(id){
    if(id != ''){
      const data ={
        doctorId:  id
      }
      this.mainService.getDOCClinic(data).then(resDataDoc =>{
      console.log("ConsultantDetailsComponent -> getDocClinic -> resDataDoc", resDataDoc)
        if(resDataDoc != ''){
          this.clinicList = [];
        for (let i = 0; i < resDataDoc.data.length; i++){
          this.DocClinic = resDataDoc.data[i]
          console.log("ConsultantDetailsComponent -> getDocClinic -> this.DocClinic", this.DocClinic)
          const element = resDataDoc.data[i];
          const arr = {
            Sr_No: "",
            Clinic_Name: element.clinicId.name,
            Address: element.locationId.location.address,
            Action: element.clinicId._id,
          };
          this.clinicList.push(arr);
        }
        this.dataSource1 = new MatTableDataSource(
          this.clinicList ? this.clinicList : null
        );
        this.dataSource1.paginator = this.paginator;
        }else{
          console.log("No Record on this Id");
        }
      }).catch(err =>{
        console.log("ConsultantDetailsComponent -> getDocClinic -> err", err)
      })
    }
  }

  openEdit(id) {
  console.log("ConsultantDetailsComponent -> openEdit -> id", id)
  const data ={
    clinicId: id
  }
    this.mainService.getDOCClinic(data).then(resData =>{
    console.log("ConsultantDetailsComponent -> openEdit -> resData", resData)
    this.ClinicDetails = resData.data[0]
    this.IdClinic = this.ClinicDetails.clinicId._id
    this.IdLocation = this.ClinicDetails.locationId._id
    this.IdTime = this.ClinicDetails._id
    console.log("ConsultantDetailsComponent -> openEdit -> this.IdClinic  +  this.IdLocation + this.IdTime", this.IdClinic ,  this.IdLocation ,  this.IdTime)
      for (let i = 0; i < resData.data.length; i++){
        this.memberForm.patchValue({
          clinicName: resData.data[i].clinicId.name,
          address: resData.data[i].locationId.location.address,
          landmark: resData.data[i].locationId.location.landmark,
          country: resData.data[i].locationId.location.country,
          state: resData.data[i].locationId.location.state,
          city: resData.data[i].locationId.location.city,
         
        })
        

        for (let k = 0; k < resData.data[0].timing.length; k++){
          if(k==0){
            this.memberForm.patchValue({
              MorStart0: resData.data[i].timing[k].morningSlot.startTime,
              MorEnd0: resData.data[i].timing[k].morningSlot.endTime,
              AftStart0: resData.data[i].timing[k].afternoonSlot.startTime,
              AftEnd0: resData.data[i].timing[k].afternoonSlot.endTime,
              EveStart0: resData.data[i].timing[k].eveningSlot.startTime,
              EveEnd0: resData.data[i].timing[k].eveningSlot.endTime,
              NigStart0: resData.data[i].timing[k].nightSlot.startTime,
              NigEnd0: resData.data[i].timing[k].nightSlot.endTime,
            })
          }
          else if(k==1){
            this.memberForm.patchValue({
              MorStart1: resData.data[i].timing[k].morningSlot.startTime,
              MorEnd1: resData.data[i].timing[k].morningSlot.endTime,
              AftStart1: resData.data[i].timing[k].afternoonSlot.startTime,
              AftEnd1: resData.data[i].timing[k].afternoonSlot.endTime,
              EveStart1: resData.data[i].timing[k].eveningSlot.startTime,
              EveEnd1: resData.data[i].timing[k].eveningSlot.endTime,
              NigStart1: resData.data[i].timing[k].nightSlot.startTime,
              NigEnd1: resData.data[i].timing[k].nightSlot.endTime,
            })
          }else if(k == 2){
            this.memberForm.patchValue({
              MorStart2: resData.data[i].timing[k].morningSlot.startTime,
              MorEnd2: resData.data[i].timing[k].morningSlot.endTime,
              AftStart2: resData.data[i].timing[k].afternoonSlot.startTime,
              AftEnd2: resData.data[i].timing[k].afternoonSlot.endTime,
              EveStart2: resData.data[i].timing[k].eveningSlot.startTime,
              EveEnd2: resData.data[i].timing[k].eveningSlot.endTime,
              NigStart2: resData.data[i].timing[k].nightSlot.startTime,
              NigEnd2: resData.data[i].timing[k].nightSlot.endTime,
            })
          }else if(k == 3){
            this.memberForm.patchValue({
              MorStart3: resData.data[i].timing[k].morningSlot.startTime,
              MorEnd3: resData.data[i].timing[k].morningSlot.endTime,
              AftStart3: resData.data[i].timing[k].afternoonSlot.startTime,
              AftEnd3: resData.data[i].timing[k].afternoonSlot.endTime,
              EveStart3: resData.data[i].timing[k].eveningSlot.startTime,
              EveEnd3: resData.data[i].timing[k].eveningSlot.endTime,
              NigStart3: resData.data[i].timing[k].nightSlot.startTime,
              NigEnd3: resData.data[i].timing[k].nightSlot.endTime,
            })
          }else if(k == 4){
            this.memberForm.patchValue({
              MorStart4: resData.data[i].timing[k].morningSlot.startTime,
              MorEnd4: resData.data[i].timing[k].morningSlot.endTime,
              AftStart4: resData.data[i].timing[k].afternoonSlot.startTime,
              AftEnd4: resData.data[i].timing[k].afternoonSlot.endTime,
              EveStart4: resData.data[i].timing[k].eveningSlot.startTime,
              EveEnd4: resData.data[i].timing[k].eveningSlot.endTime,
              NigStart4: resData.data[i].timing[k].nightSlot.startTime,
              NigEnd4: resData.data[i].timing[k].nightSlot.endTime,
            })
          }else if(k == 5){
            this.memberForm.patchValue({
              MorStart5: resData.data[i].timing[k].morningSlot.startTime,
              MorEnd5: resData.data[i].timing[k].morningSlot.endTime,
              AftStart5: resData.data[i].timing[k].afternoonSlot.startTime,
              AftEnd5: resData.data[i].timing[k].afternoonSlot.endTime,
              EveStart5: resData.data[i].timing[k].eveningSlot.startTime,
              EveEnd5: resData.data[i].timing[k].eveningSlot.endTime,
              NigStart5: resData.data[i].timing[k].nightSlot.startTime,
              NigEnd5: resData.data[i].timing[k].nightSlot.endTime,
            })
          }else if(k == 6){
            this.memberForm.patchValue({
              MorStart6: resData.data[i].timing[k].morningSlot.startTime,
              MorEnd6: resData.data[i].timing[k].morningSlot.endTime,
              AftStart6: resData.data[i].timing[k].afternoonSlot.startTime,
              AftEnd6: resData.data[i].timing[k].afternoonSlot.endTime,
              EveStart6: resData.data[i].timing[k].eveningSlot.startTime,
              EveEnd6: resData.data[i].timing[k].eveningSlot.endTime,
              NigStart6: resData.data[i].timing[k].nightSlot.startTime,
              NigEnd6: resData.data[i].timing[k].nightSlot.endTime,
            })
          }else{
            this.hide1 = true
          }
        }
      }
      console.log("ConsultantDetailsComponent -> openEdit ->  this.memberForm",  this.memberForm)
    }).catch(err =>{
      console.log("ConsultantDetailsComponent -> openEdit -> err", err)
    })
  }

  onDelete(id){
    console.log("ConsultantDetailsComponent -> onDelete -> id", id)
    const data ={
      clinicId: id
    }
    this.mainService.getDOCClinic(data).then(resDataDel => {
      console.log("ConsultantDetailsComponent -> onDelete -> resDataDel", resDataDel)
      this.DoctorId = resDataDel.data[0].doctorId
      this.IdClinic = resDataDel.data[0].clinicId._id
      this.IdLocation = resDataDel.data[0].locationId._id
      this.IdTime = resDataDel.data[0]._id
      console.log("ConsultantDetailsComponent -> openEdit -> this.IdClinic  +  this.IdLocation + this.IdTime", this.IdClinic ,  this.IdLocation ,  this.IdTime)
    
      this.mainService.deleteClinicById(this.IdClinic).then(DeleteCres =>{
        console.log("ConsultantDetailsComponent -> onDelete -> DeleteCres", DeleteCres)
      }).catch(err =>{
       console.log("ConsultantDetailsComponent -> onDelete -> err", err)
      })

      this.mainService.deleteLocationById(this.IdLocation).then(deleteLRes =>{
       console.log("ConsultantDetailsComponent -> onDelete -> deleteLRes", deleteLRes)
      }).catch(error =>{
        console.log("ConsultantDetailsComponent -> onDelete -> error", error)
      })

      this.mainService.deleteTimeById(this.IdTime).then(deleteTRes =>{
        console.log("ConsultantDetailsComponent -> onDelete -> deleteTRes", deleteTRes)
       }).catch(err =>{
         console.log("ConsultantDetailsComponent -> onDelete -> err", err)
       })

       this.ngOnInit();
       this.getDocClinic(this.DoctorId)

    }).catch(error =>{
      console.log("ConsultantDetailsComponent -> onDelete -> error", error)
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
          name: this.memberForm.controls.inputClinic.value
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
    console.log("ConsultantDetailsComponent -> visiteClinic -> event", event)
    this.mainService.getDOCClinic(id).then(DocClinic =>{
    console.log("ConsultantDetailsComponent -> visiteClinic -> DocClinic", DocClinic)
      this.DOCClicnicId = DocClinic.data[0]?.clinicId?._id
      this.locClinicId = DocClinic.data[0]?.locationId?._id
      this.timeClinicId = DocClinic.data[0]?._id
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
