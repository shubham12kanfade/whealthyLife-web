import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent implements OnInit {
  active: String = "Info";
  id: any;
  profileData: any;
  constructor(public mainService: MainService, public activatedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(params => {
      this.id = params['id'];
      console.log("DoctorProfileComponent -> ngOnInit -> this.id", this.id)
    })
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.mainService.getTimeSlotByUserId(this.id).then(resData => {
      console.log("DoctorProfileComponent -> getProfileDetails -> resData", resData);
      this.profileData = resData.data;
    }).catch(error => {
      console.log("DoctorProfileComponent -> getProfileDetails -> error", error)
    })
  }

  activefn(val) {
    this.active = val;
  }
}
