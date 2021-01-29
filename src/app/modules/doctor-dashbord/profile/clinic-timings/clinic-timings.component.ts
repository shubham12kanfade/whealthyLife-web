import { DoctorProfileService } from 'src/app/services/doctor-profile.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControlName, FormControl, FormBuilder } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-clinic-timings',
  templateUrl: './clinic-timings.component.html',
  styleUrls: ['./clinic-timings.component.scss']
})
export class ClinicTimingsComponent implements OnInit {

  columns: string[] = ['Day', 'MorningSlot', 'AfternoonSlots', 'EveningSlots', 'NightSlots'];
  dataSource = ELEMENT_DATA;

  

  SlotForm: FormGroup;
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
  profile: any;
  constructor(public mainService: MainService,
    public messageService: MessageService,
    public UserService:UserService,
    public DoctorProfileService:DoctorProfileService,
    public  fb:FormBuilder) {
    
      this.SlotForm = this.fb.group({
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
  }
  
  ngOnInit(): void {
    
  }


  getProfile() {
    this.mainService.getProfile().then(resData => {
      this.profile = resData.data
      console.log("ClinicTimingsComponent -> getProfile -> this.profile", this.profile)
    }).catch(error => {
      console.log("EditProfileComponent -> getProfile -> error", error);
    })
  }

  onSave(){
    if(this.SlotForm.dirty && this.SlotForm.valid){
        const data ={
          slotsArray: [
            {
          day: "monday" ,
          morningSlot: {
            from : this.SlotForm.controls['MorStart0'].value ? this.SlotForm.controls['MorStart0'].value : null ,
            to : this.SlotForm.controls['MorEnd0'].value ? this.SlotForm.controls['MorEnd0'].value : null
          },
          afternoonSlot: {
            from: this.SlotForm.controls['AftStart0'].value ? this.SlotForm.controls['AftStart0'].value : null,
            to: this.SlotForm.controls['AftEnd0'].value ? this.SlotForm.controls['AftEnd0'].value : null
          },
          eveningSlot: {
            from: this.SlotForm.controls['EveStart0'].value ? this.SlotForm.controls['EveStart0'].value : null,
            to: this.SlotForm.controls['EveEnd0'].value,
          },
          nightSlot: {
            from: this.SlotForm.controls['NigStart0'].value ? this.SlotForm.controls['NigStart0'].value : null,
            to: this.SlotForm.controls['NigEnd0'].value ? this.SlotForm.controls['NigEnd0'].value : null,
          }
        },
        {
          day: "tuesday" ,
          morningSlot: {
            from : this.SlotForm.controls['MorStart1'].value ? this.SlotForm.controls['MorStart1'].value : null,
            to : this.SlotForm.controls['MorEnd1'].value ? this.SlotForm.controls['MorEnd1'].value : null
          },
          afternoonSlot: {
            from: this.SlotForm.controls['AftStart1'].value ? this.SlotForm.controls['AftStart1'].value : null,
            to: this.SlotForm.controls['AftEnd1'].value ? this.SlotForm.controls['AftEnd1'].value : null
          },
          eveningSlot: {
            from: this.SlotForm.controls['EveStart1'].value ? this.SlotForm.controls['EveStart1'].value : null,
            to: this.SlotForm.controls['EveEnd1'].value ? this.SlotForm.controls['EveEnd1'].value : null,
          },
          nightSlot: {
            from: this.SlotForm.controls['NigStart1'].value ? this.SlotForm.controls['NigStart1'].value : null,
            to: this.SlotForm.controls['NigEnd1'].value ? this.SlotForm.controls['NigEnd1'].value : null,
          }
        },
        {
        day: "wednesday" ,
          morningSlot: {
            from : this.SlotForm.controls['MorStart2'].value ? this.SlotForm.controls['MorStart2'].value : null,
            to : this.SlotForm.controls['MorEnd2'].value ? this.SlotForm.controls['MorEnd2'].value : null
          },
          afternoonSlot: {
            from: this.SlotForm.controls['AftStart2'].value ? this.SlotForm.controls['AftStart2'].value : null,
            to: this.SlotForm.controls['AftEnd2'].value ? this.SlotForm.controls['AftEnd2'].value : null
          },
          eveningSlot: {
            from: this.SlotForm.controls['EveStart2'].value ? this.SlotForm.controls['EveStart2'].value : null,
            to: this.SlotForm.controls['EveEnd2'].value ? this.SlotForm.controls['EveEnd2'].value : null,
          },
          nightSlot: {
            from: this.SlotForm.controls['NigStart2'].value ? this.SlotForm.controls['NigStart2'].value : null,
            to: this.SlotForm.controls['NigEnd2'].value ? this.SlotForm.controls['NigEnd2'].value : null,
          }
        },
        {
          day: "thursday" ,
          morningSlot: {
            from : this.SlotForm.controls['MorStart3'].value ? this.SlotForm.controls['MorStart3'].value : null,
            to : this.SlotForm.controls['MorEnd3'].value ? this.SlotForm.controls['MorEnd3'].value : null
          },
          afternoonSlot: {
            from: this.SlotForm.controls['AftStart3'].value ? this.SlotForm.controls['AftStart3'].value : null,
            to: this.SlotForm.controls['AftEnd3'].value ? this.SlotForm.controls['AftEnd3'].value : null
          },
          eveningSlot: {
            from: this.SlotForm.controls['EveStart3'].value ? this.SlotForm.controls['EveStart3'].value : null,
            to: this.SlotForm.controls['EveEnd3'].value ? this.SlotForm.controls['EveEnd3'].value : null,
          },
          nightSlot: {
            from: this.SlotForm.controls['NigStart3'].value ? this.SlotForm.controls['NigStart3'].value : null,
            to: this.SlotForm.controls['NigEnd3'].value ? this.SlotForm.controls['NigEnd3'].value : null,
          }
        },
        {
          day: "friday" ,
          morningSlot: {
            from : this.SlotForm.controls['MorStart4'].value ? this.SlotForm.controls['MorStart4'].value : null,
            to : this.SlotForm.controls['MorEnd4'].value ? this.SlotForm.controls['MorStart4'].value : null
          },
          afternoonSlot: {
            from: this.SlotForm.controls['AftStart4'].value ? this.SlotForm.controls['AftStart4'].value : null,
            to: this.SlotForm.controls['AftEnd4'].value ? this.SlotForm.controls['AftEnd4'].value : null
          },
          eveningSlot: {
            from: this.SlotForm.controls['EveStart4'].value ? this.SlotForm.controls['EveStart4'].value : null,
            to: this.SlotForm.controls['EveEnd4'].value ? this.SlotForm.controls['EveEnd4'].value : null,
          },
          nightSlot: {
            from: this.SlotForm.controls['NigStart4'].value ? this.SlotForm.controls['NigStart4'].value : null,
            to: this.SlotForm.controls['NigEnd4'].value ? this.SlotForm.controls['NigEnd4'].value : null,
          }
          },
        {
          day: "saturday" ,
          morningSlot: {
            from : this.SlotForm.controls['MorStart5'].value  ? this.SlotForm.controls['MorStart5'].value : null,
            to : this.SlotForm.controls['MorEnd5'].value  ? this.SlotForm.controls['MorEnd5'].value : null
          },
          afternoonSlot: {
            from: this.SlotForm.controls['AftStart5'].value  ? this.SlotForm.controls['AftStart5'].value : null,
            to: this.SlotForm.controls['AftEnd5'].value  ? this.SlotForm.controls['AftEnd5'].value : null
          },
          eveningSlot: {
            from: this.SlotForm.controls['EveStart5'].value  ? this.SlotForm.controls['EveStart5'].value : null,
            to: this.SlotForm.controls['EveEnd5'].value  ? this.SlotForm.controls['EveEnd5'].value : null
          },
          nightSlot: {
            from: this.SlotForm.controls['NigStart5'].value  ? this.SlotForm.controls['NigStart5'].value : null,
            to: this.SlotForm.controls['NigEnd5'].value  ? this.SlotForm.controls['NigEnd5'].value : null
          }
          },
          {
            day: "sunday" ,
            morningSlot: {
              from : this.SlotForm.controls['MorStart6'].value ? this.SlotForm.controls['MorStart6'].value : null,
              to : this.SlotForm.controls['MorEnd6'].value ? this.SlotForm.controls['MorEnd6'].value : null
            },
            afternoonSlot: {
              from: this.SlotForm.controls['AftStart6'].value ? this.SlotForm.controls['AftStart6'].value : null,
              to: this.SlotForm.controls['AftEnd6'].value ? this.SlotForm.controls['AftEnd6'].value : null
            },
            eveningSlot: {
              from: this.SlotForm.controls['EveStart6'].value ? this.SlotForm.controls['EveStart6'].value : null,
              to: this.SlotForm.controls['EveEnd6'].value ? this.SlotForm.controls['EveEnd6'].value : null,
            },
            nightSlot: {
              from: this.SlotForm.controls['NigStart6'].value ? this.SlotForm.controls['NigStart6'].value : null,
              to: this.SlotForm.controls['NigEnd6'].value ? this.SlotForm.controls['NigEnd6'].value : null,
            }
            },
          ]
        }

        this.mainService.addTimeSlot(data).then(resData =>{
          console.log("ClinicTimingsComponent -> onSave -> resData", resData)
          this.showToast('success', 'Profile', 'Profile updated successfully');
        }).catch(err =>{
          console.log("ClinicTimingsComponent -> onSave -> err", err)
          this.showToast('warn', 'Profile', 'Something went wrong');
        })


    }else{
      this.SlotForm.removeControl('FormControlName');
    }
  }

  showToast(type, messageType, message) {
    setTimeout(() => {
      this.messageService.add({ severity: type, summary: messageType, detail: message });
    });
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

}

export interface PeriodicElement {
  Day: any;
  MorningSlot: string;
  AfternoonSlots: string;
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
