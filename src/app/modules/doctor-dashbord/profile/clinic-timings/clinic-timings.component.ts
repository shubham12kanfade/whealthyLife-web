import { DoctorProfileService } from 'src/app/services/doctor-profile.service';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { MessageService } from 'primeng/api';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-clinic-timings',
  templateUrl: './clinic-timings.component.html',
  styleUrls: ['./clinic-timings.component.scss']
})
export class ClinicTimingsComponent implements OnInit {

  columns: string[] = ['Day', 'MorningSlot', 'AfternoonSlots', 'EveningSlots', 'NightSlots'];
  dataSource = ELEMENT_DATA;

  


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
    
  }
  
  ngOnInit(): void {

  }

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
