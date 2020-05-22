import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  sark: boolean=true;
  second: boolean=false;
  doctor: boolean=false;
  staff:boolean=false;
  tax: boolean=false;
  pay: boolean=false;
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
  shomodal1(){
    this.tax=!this.tax;
  }
  shomodal2(){
    this.pay=!this.pay;
  }
}