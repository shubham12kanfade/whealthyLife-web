import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-groups',
  templateUrl: './patient-groups.component.html',
  styleUrls: ['./patient-groups.component.scss']
})
export class PatientGroupsComponent implements OnInit {
  newg: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  shomodalp(){
    this.newg=!this.newg;
  }
}
