import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-security',
  templateUrl: './data-security.component.html',
  styleUrls: ['./data-security.component.scss']
})
export class DataSecurityComponent implements OnInit {
  mod1: boolean=false;
  mod2: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
showmodal1(){
  this.mod1= !this.mod1;
}
showmodal2(){
  this.mod2= !this.mod2;
}
}
