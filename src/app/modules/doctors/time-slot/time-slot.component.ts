import { Component, OnInit } from '@angular/core';
import { DoctorProfileService } from 'src/app/services/doctor-profile.service';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {
  profileData: any;
  id: any;

  constructor(  public DoctorProfile: DoctorProfileService) { 
    this.getProfileDetails()
  }

  ngOnInit(): void {
  }

  getProfileDetails() {
    this.DoctorProfile.getDoctorProfile(this.id)
      .then((resData) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> resData",
          resData
        );
        this.profileData = resData.data;
        console.log("DoctorProfileComponent -> getProfileDetails -> profileData", this.profileData)
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }
 

}
