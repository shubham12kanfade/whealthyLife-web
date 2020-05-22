import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
  active:String="Info";
  constructor() { }

  ngOnInit(): void {


  }

  activefn(val){
    this.active=val;
  }

}
