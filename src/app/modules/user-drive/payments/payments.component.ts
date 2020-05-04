import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  nav: boolean=true;
  nav1: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
navopen(){
  this.nav=true;
  this.nav1=false;
}
navopen1(){
  this.nav1=true;
  this.nav=false;
}
}
