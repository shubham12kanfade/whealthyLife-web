import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
@Component({
  selector: 'app-doctor-dashbord',
  templateUrl: './doctor-dashbord.component.html',
  styleUrls: ['./doctor-dashbord.component.scss']
})
export class DoctorDashbordComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
