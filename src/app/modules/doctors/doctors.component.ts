import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  aval: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
availability(){
  this.aval=!this.aval;
}
}
