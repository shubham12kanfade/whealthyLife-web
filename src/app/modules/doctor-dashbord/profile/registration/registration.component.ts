import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
items:any=[];
  constructor() {
    this.items.length=100;
   }

  ngOnInit(): void {
  }

}
