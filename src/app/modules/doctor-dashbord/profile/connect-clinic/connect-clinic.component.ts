import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-clinic',
  templateUrl: './connect-clinic.component.html',
  styleUrls: ['./connect-clinic.component.scss']
})
export class ConnectClinicComponent implements OnInit {

  items:any=[];
  constructor() {
    this.items.length=100;
   }

  ngOnInit(): void {
  }

}
