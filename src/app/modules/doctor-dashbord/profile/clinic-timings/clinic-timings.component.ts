import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic-timings',
  templateUrl: './clinic-timings.component.html',
  styleUrls: ['./clinic-timings.component.scss']
})
export class ClinicTimingsComponent implements OnInit {
  dMO: boolean=false;
  dTU: boolean=false;
  dWE: boolean=false;
  dTH: boolean=false;
  dFR: boolean=false;
  dSA: boolean=false;
  dSU: boolean=false;

  constructor() { }
  MO(){
    this.dMO=!this.dMO
    console.log("ClinicTimingsComponent -> MO -> dMO",this.dMO)
  }
  TU(){
    this.dTU=!this.dTU
  }
  WE(){
    this.dWE=!this.dWE
  }
  TH(){
    this.dTH=!this.dTH
  }
  FR(){
    this.dFR=!this.dFR
  }
  SU(){
    this.dSU=!this.dSU
  }
  SA(){
     this.dSA=!this.dSA
  }
  ngOnInit(): void {
  }

}
