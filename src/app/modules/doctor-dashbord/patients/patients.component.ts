import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  PatientDate: string="recent";

  constructor() { }



  today(){

    this.PatientDate="today"
  }

  recent(){

    this.PatientDate="recent"
  }

  all(){
    this.PatientDate="all"

  }
  ngOnInit(): void {
  }




}
