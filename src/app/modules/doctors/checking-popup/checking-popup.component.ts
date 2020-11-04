import { PaitentsService } from 'src/app/services/paitents.service';
import { UserService } from 'src/app/services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorProfileService } from 'src/app/services/doctor-profile.service';
import { BookingPageService } from './../../../services/booking-page.service';



@Component({
  selector: 'app-checking-popup',
  templateUrl: './checking-popup.component.html',
  styleUrls: ['./checking-popup.component.scss']
})
export class CheckingPopupComponent implements OnInit {

  id: any;
  profileData: any;
  degree: any;
  CURUser: any;
  UserID: any;

  constructor(  public dialogRef: MatDialogRef<CheckingPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public DoctorProfile: DoctorProfileService,
    public BookingPageService: BookingPageService,
    public userService :UserService,
    public paitentService: PaitentsService) {



    }

  ngOnInit(): void {

    this.getProfileDetails()
    this.BookingPageService.getDegree(this.data).then((resData) => {
      this.degree = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })


    this.UserID =  this.userService.getUserInfo()

    this.paitentService.getProfileDetaile(this.UserID._id).then(CURUserRes => {
      this.CURUser = CURUserRes.data
    })


  }

  getProfileDetails() {
    const data = { findId: this.data }

    this.DoctorProfile.getDoctorProfile(data)
      .then((resData) => {
        this.profileData = resData.data;
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }

}
