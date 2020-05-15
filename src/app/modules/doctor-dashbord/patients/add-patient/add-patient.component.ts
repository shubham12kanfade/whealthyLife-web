import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  show: boolean=true;
  droup: boolean=false;

  
  constructor() { }

  ngOnInit(): void {
  }
  showpopup(){

    this.show=!this.show;
  }
  showDroup(){
    this.droup=!this.droup
  }




}
