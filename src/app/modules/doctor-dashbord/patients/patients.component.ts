import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  PatientDate: string="today";

  activeTab = 'today';
  constructor() { }



 
  ngOnInit(): void {
  }


  today(activeTab){
    this.activeTab = activeTab;
    this.PatientDate="today"
  }


  recent(activeTab){
    this.activeTab = activeTab;
    this.PatientDate="recent"
  }

  all(activeTab){
    this.activeTab = activeTab;
    this.PatientDate="all"
  }

  

}
