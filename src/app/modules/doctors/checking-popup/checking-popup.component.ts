import { VideoService } from './../../../services/video.service';
import { PaitentsService } from 'src/app/services/paitents.service';
import { UserService } from 'src/app/services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorProfileService } from 'src/app/services/doctor-profile.service';
import { BookingPageService } from './../../../services/booking-page.service';
import {MatSnackBar} from '@angular/material/snack-bar';



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
  petientId: any;

  constructor(  public dialogRef: MatDialogRef<CheckingPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public DoctorProfile: DoctorProfileService,
    public BookingPageService: BookingPageService,
    public userService :UserService,
    public paitentService: PaitentsService,
    public videoService :VideoService,
    private _snackBar: MatSnackBar) {



    }

  ngOnInit(): void {

    this.getProfileDetails()
    this.BookingPageService.getDegree(this.data.doctor).then((resData) => {
      this.degree = resData.data
    }).catch((err) => {
      console.log("DoctorProfileComponent -> ngOnInit -> err", err)
    })

    this.UserID =  this.userService.getUserInfo()
    this.paitentService.getProfileDetaile(this.UserID._id).then(CURUserRes => {
      this.CURUser = CURUserRes.data
      this.petientId = CURUserRes.data._id


    })



  }

  getProfileDetails() {
    const data = { findId: this.data.doctor }

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

  bookappointment(){
    const appointData = {
      ...this.data,
      appoinmentType: "Scheduled",
      petient: this.UserID._id
    }


    // alert(JSON.stringify(appointData)  )

    this.videoService.postAppointmentSlot(appointData).then(appointRes => {
      this._snackBar.open('Appointment Book Successfully On Date : '+ this.data.date.slice(0,10) ,'', {
        duration: 3600,
        horizontalPosition: 'right',
        verticalPosition:'top',
        panelClass: ['redNoMatch']

      });

    }).catch(err => {
    console.log("CheckingPopupComponent -> postAppointment -> err", err);
    this._snackBar.open('Please Login', '', {
      duration: 500,
      horizontalPosition: 'right',
      verticalPosition:'top',
      panelClass: ['redMatch']

    });

    })

  }

}
