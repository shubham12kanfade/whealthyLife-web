import { DoctorProfileService } from 'src/app/services/doctor-profile.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-clinic-timings',
  templateUrl: './clinic-timings.component.html',
  styleUrls: ['./clinic-timings.component.scss']
})
export class ClinicTimingsComponent implements OnInit {
  dMO: boolean = false;
  dTU: boolean = false;
  dWE: boolean = false;
  dTH: boolean = false;
  dFR: boolean = false;
  dSA: boolean = false;
  dSU: boolean = false;
  TimeSloat: any[];

  @Input() stepper: any;
  timeSlot: FormGroup;
  timeSloats: any = [];
  TimeSloat2: any = [];
  doctorinfo: any;
  days: any;

  constructor(public mainService: MainService,
    public messageService: MessageService,
    public UserService:UserService,
    public DoctorProfileService:DoctorProfileService) {
    this.timeSlot = new FormGroup({
      session1Start: new FormControl('00:00'),
      session1End: new FormControl('13:00'),
      session2Start: new FormControl('14:00'),
      session2End: new FormControl('23:30'),
    })

  
  

    this.getTime();
this.doctorinfo=this.UserService.getUserInfo();


  }

  getTimeSlots() {
    this.mainService.getTimeSlot().then(resData => {
      if (resData.data && resData.data.slots.length > 0) {
        this.timeSlot.patchValue(resData.data.slots[0]);
        resData.data.slots.forEach(element => {
          this.setTime(element.day);
        });
      }
    }).catch(error => {
      console.log("ClinicTimingsComponent -> getTimeSlots -> error", error);
    })
  }

  onSave() {
    var data = this.getTimeSloatObject();
    if (data.length === 0) {
      this.showToast('error', 'Time slot', 'Please select time slot');
      return;
    }
    var slots = {
      slots: data
    }
    console.log("ClinicTimingsComponent -> onSave -> slots", slots)
    this.mainService.addTimeSlot(slots).then(resData => {
      console.log("ClinicTimingsComponent -> onSave -> resData", resData);
      this.showToast('success', 'Time Slots', 'Successfully updated');
      this.stepper.next();
    }).catch(error => {
      console.log("ClinicTimingsComponent -> onSave -> error", error)
    })
  }

  getTime() {
    this.TimeSloat = [];
    this.TimeSloat2 = [];

    for (var i = 0; i < 24; i++) {
      var hour = i < 10 ? '0' + i : i;
      if (i <= 13) {
        this.TimeSloat.push({ label: hour + ':00', value: hour + ':00' });
        this.TimeSloat.push({ label: hour + ':30', value: hour + ':30' });
      } else {
        this.TimeSloat2.push({ label: hour + ':00', value: hour + ':00' });
        this.TimeSloat2.push({ label: hour + ':30', value: hour + ':30' });
      }
    }
  }

  MO() {
    this.dMO = !this.dMO
  }
  TU() {
    this.dTU = !this.dTU
  }
  WE() {
    this.dWE = !this.dWE
  }
  TH() {
    this.dTH = !this.dTH
  }
  FR() {
    this.dFR = !this.dFR
  }
  SU() {
    this.dSU = !this.dSU
  }
  SA() {
    this.dSA = !this.dSA
  }
  ngOnInit(): void {
    this.getTimeSlots();
this.getProfile();
  
  }
  getProfile(){
this.DoctorProfileService.getSlot(this.doctorinfo._id).then((resData)=>{

this.days=resData.data 

for (let i = 0; i < this.days.length; i++) {
  console.log("ClinicTimingsComponent -> getProfile -> this.days[i].day", this.days[i]?.day)

  if(this.days[i].day=="monday")
  {
    this.dMO = true;
  
  }
  if(this.days[i].day=="tuesday")
  {
    this.dTU = true;
    
  }
  if(this.days[i].day=="wednesday")
  {
    this.dWE = true;
  
  }
  if(this.days[i].day=="thursday")
  {
    this.dTH = true;
 
  }
  if(this.days[i].day=="friday")
  {
    this.dFR= true;
   
  }
  if(this.days[i].day=="saturday")
  {
    this.dSA = true;
    
  }
  if(this.days[i].day=="sunday")
  {
    this.dSU = true;
  }


}


}).catch((error)=>{
console.log("ClinicTimingsComponent -> getProfile -> error", error)
  

})
  }

  change(){}

  getTimeSloatObject() {
    var data = [];
    if (this.dMO) {
      data.push({ day: "monday", ...this.timeSlot.value });
    }
    if (this.dTU) {
      data.push({ day: "tuesday", ...this.timeSlot.value });
    }
    if (this.dWE) {
      data.push({ day: "wednesday", ...this.timeSlot.value });
    }
    if (this.dTH) {
      data.push({ day: "thursday", ...this.timeSlot.value });
    }
    if (this.dFR) {
      data.push({ day: "friday", ...this.timeSlot.value });
    }
    if (this.dSA) {
      data.push({ day: "saturday", ...this.timeSlot.value });
    }
    if (this.dSU) {
      data.push({ day: "sunday", ...this.timeSlot.value });
    }
    return data;
  }

  setTime(day) {
    if (day == 'monday') {
      this.dMO = true;
    }
    if (day == 'tuesday') {
      this.dTU = true;
    }
    if (day == 'wednesday') {
      this.dWE = true;
    }
    if (day == 'thursday') {
      this.dTH = true;
    }
    if (day == 'friday') {
      this.dFR = true;
    }
    if (day == 'saturday') {
      this.dSA = true;
    }
    if (day == 'sunday') {
      this.dSU = true;
    }
    return;
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }

}
