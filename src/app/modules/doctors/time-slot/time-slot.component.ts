import { BookingService } from "./../../../services/booking.service";
import { CookieService } from "ngx-cookie-service";
import { Component, OnInit } from "@angular/core";
import { DoctorProfileService } from "src/app/services/doctor-profile.service";
import { ConsultationService } from "src/app/services/consultation.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { BookingPageService } from './../../../services/booking-page.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckingPopupComponent } from './../checking-popup/checking-popup.component';

@Component({
  selector: "app-time-slot",
  templateUrl: "./time-slot.component.html",
  styleUrls: ["./time-slot.component.scss"],
})
export class TimeSlotComponent implements OnInit {
  profileData: any;
  id: any;
  minDate = new Date();
  aval: boolean;
  evningSlot: any = [];
  morningSlot: any = [];
  selectedSlot: any;
  show: any;
  slot: any;
  cdate: string;
  calenderDate: any;
  slotbutton: any;
  currentDate: Date;
  slot2: any;
  dadad: moment.Moment;
  constructor(
    private BookingService: BookingService,
    private CookieService: CookieService,
    private route: ActivatedRoute,
    public DoctorProfile: DoctorProfileService,
    public consultationService: ConsultationService,
    public bookingPageService:BookingPageService,
    public router: Router,
    public dialog: MatDialog
  ) {
    this.cdate = moment().format("llll");
    this.route.params.subscribe((params) => {
      this.id = params.id;
      console.log("TimeSlotComponent -> constructor -> this.id", this.id);
    });
    this.getProfileDetails();
    this.timeSlot();
  }
  selectSolot(time, oclock) {
    this.slotbutton = time;
    console.log(
      "TimeSlotComponent -> selectSolot -> time,oclock",
      time,
      oclock
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(CheckingPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  


  ngOnInit(): void {
    // this.showtime(this.profileData)
    this.currentDate = new Date();
    console.log("TimeSlotComponent -> ngOnInit -> this.currentDate", this.currentDate);
    this.latestday();
    // const data1 = moment().add(1, 'days').format('L');
  }

  onSelect(event) {
  console.log("TimeSlotComponent -> onSelect -> event", event)
    
  if(event == this.minDate){
    this.latestday();
  }
  else{
    this.calenderDate =moment(event).add(1,'day') ;
      this.bookingPageService.getDoctorSlotId(this.id, { date: this.calenderDate }).then((resData) => {
        this.slot = resData.data;
      }).catch((err) => {
        console.log("DoctorProfileComponent -> ngOnInit -> err", err);
      })
  }
    // this.calenderDate = event;
    this.dadad=moment();
    console.log("TimeSlotComponent -> onSelect -> this.dadad", this.dadad)
    }
    

  latestday(){
    this.bookingPageService.getDoctorSlotId( this.id,{ date: this.currentDate } ).then(resData=>{
      console.log("cdsbjcbhjbcbdsbcjk", resData);
      this.slot = resData.data;
      }).catch(error =>{
      console.log("TimeSlotComponent -> ngOnInit -> error", error);
      })
  }

  getProfileDetails() {
    const data = {
      findId:this.id,
    };
    
    this.DoctorProfile.getDoctorProfile(data)
      .then((resData) => {
        this.profileData = resData.data;
        this.showtime(this.profileData);
      })
      .catch((error) => {
        console.log(
          "DoctorProfileComponent -> getProfileDetails -> error",
          error
        );
      });
  }
  timeSlot() {
    this.DoctorProfile.getSlot(this.id)
      .then((resData) => {
        this.slot = resData.data;
        console.log("TimeSlotComponent -> timeSlot -> slot", this.slot);
      })
      .catch((error) => {
        console.log("TimeSlotComponent -> timeSlot -> error", error);
      });
  }
  onConsultation(id) {
    var data = {
      doctor: id,
    };
    this.consultationService
      .createSession(data)
      .then((resData) => {
        console.log("DoctorsComponent -> onConsultation -> resData", resData);
        this.router.navigate(["/video-conference"]);
      })
      .catch((error) => {
        console.log("DoctorsComponent -> onConsultation -> error", error);
      });
  }
  // addPractice() {
  //   const dialogRef = this.dialog.open(TimeSlotComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  onSelectSlot(time) {
    this.selectedSlot = time;
  }
  showtime(doctor) {
    console.log("TimeSlotComponent -> showtime -> doctor", doctor._id);
    const pid = JSON.parse(this.CookieService.get("userInfo_WhealthyLife"));
    const data = {
      petient: pid._id,
      doctor: doctor._id,
      appoinmentType: "Scheduled",
      status: "Pending",
      date: this.calenderDate ? this.calenderDate : this.cdate,
      time: this.slotbutton,
    };
    this.BookingService.addBooking(data)
      .then((resData) => {
        console.log("TimeSlotComponent -> showtime -> resData", resData);
      })
      .catch((error) => {
        console.log("TimeSlotComponent -> showtime -> error", error);
      });
    console.log("TimeSlotComponent -> showtime -> data", data);
    // this.show = doctor._id;
    // console.log("DoctorsComponent -> showtime -> doctor", doctor);
    // var session1Start = doctor.slots[0].session1Start.split(":");
    // var session1End = doctor.slots[0].session1End.split(":");
    // var session2Start = doctor.slots[0].session2Start.split(":");
    // var session2End = doctor.slots[0].session2End.split(":");
    // console.log("DoctorsComponent -> showtime -> session1Start", session1Start, session1End, session2Start, session2End)
    // this.morningSlot = [];
    // this.evningSlot = [];
    // for (var i = parseInt(session1Start[0]); i < parseInt(session1End[0]); i++) {
    //   var hour = i < 10 ? '0' + i : i;
    //   if (i <= 13) {
    //     this.morningSlot.push({ label: hour + ':00', value: hour + ':00' });
    //     this.morningSlot.push({ label: hour + ':30', value: hour + ':30' });
    //   }
    // }
    // for (var i = parseInt(session2Start[0]); i < parseInt(session2End[0]); i++) {
    //   var hour = i < 10 ? '0' + i : i;
    //   if (i >= 13) {
    //     this.evningSlot.push({ label: hour + ':00', value: hour + ':00' });
    //     this.evningSlot.push({ label: hour + ':30', value: hour + ':30' });
    //   }
    // }
  }
  avaialableclick() {
    this.aval = !this.aval;
  }
  // getScroll() {
  //   $(window).scroll(function () {
  //     var sticky = $('.sticky'),
  //       scroll = $(window).scrollTop();
  //     if (scroll >= 100) sticky.addClass('fixed');
  //     else sticky.removeClass('fixed');
  //   });
  //   $(window).scroll(function () {
  //     var sticky = $('.sticky1'),
  //       scroll = $(window).scrollTop();
  //     if (scroll >= 100 && scroll <= 1600) sticky.addClass('fixed1');
  //     else sticky.removeClass('fixed1');
  //   });
  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() >= 112) {
  //       $('.sticky-outer-wrapper').addClass('fixed-sticky-outer');
  //     } else {
  //       $('.sticky-outer-wrapper').removeClass('fixed-sticky-outer');
  //     }
  //   });
  // }






}
