import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-practice-staff',
  templateUrl: './practice-staff.component.html',
  styleUrls: ['./practice-staff.component.scss']
})
export class PracticeStaffComponent implements OnInit {
  sark: boolean=true;
  second: boolean=false;
  doctor: boolean=false;
  staff:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  slideon() {
    this.sark = true;
    this.second = false;

  }
  secondon() {
    this.second = true;
    this.sark = false ;

  }
  adddoctorpopup(){
    this.doctor=!this.doctor;
  }
  addstaffpopup(){
    this.staff=!this.staff;
  }
}
