import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ConsultationService } from 'src/app/services/consultation.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { MatDialog } from '@angular/material/dialog';
import { SpecialityService } from 'src/app/services/speciality.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  show: any;
  aval: boolean = false;
  doctorList: any = [];
  evningSlot: any = [];
  morningSlot: any = [];
  minDate = new Date();
  selectedSlot: any;
  docId: any;
  specialityList: any;
  autoDoctList: any=[];

  // countries: any=[];
  keyword = 'firstName';
  tempArray: any=[];
  showDatas: any;
  searchText: any;

  searchForm: FormGroup;
//   data = [
//     {
//       id: 1,
//       name: 'Usa'
//     },
//     {
//       id: 2,
//       name: 'England'
//     }
//  ];
  


  constructor(public consultationService: ConsultationService,
    public userService: UserService,
    public router: Router,
    public dialog: MatDialog,
    public speciality :SpecialityService
  ) {
    this.getScroll();
    this.getDoctorList();
    // this.placesLoad();

    this.speciality.getSpecialization().then((resData:any)=>{
    console.log("DoctorsComponent -> resData", resData)
    this.specialityList=resData.data;
    }).catch(error=>{
    console.log("DoctorsComponent -> error", error)
    })
  }
  addPractice() {
    const dialogRef = this.dialog.open(TimeSlotComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getDoctorList() {
    this.consultationService.getDoctorlist().then(resData => {
      console.log("DoctorsComponent -> getDoctorList -> resData", resData);
      this.doctorList = resData.data;
      this.tempArray = resData.data;
      this.doctorList.forEach(ele => this.autoDoctList.push(ele.userId));
    }).catch(error => {
      console.log("DoctorsComponent -> getDoctorList -> error", error);
    })
  }


  search(){
    this.doctorList = this.tempArray;
    this.doctorList = this.tempArray.filter(ele => ele.userId.firstName.includes(this.searchText));
    console.log("DoctorsComponent -> search -> this.searchText", this.searchText)
    if (!this.searchText) {
      this.doctorList = this.tempArray;
    }
  }

  // placesLoad() {
  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ["(cities)"],
  //       componentRestrictions: {country: 'in'}
  //     });
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }
  //       });
  //     });
  //   });
  // }


  

  onConsultation(id) {
    var data = {
      doctor: id
    }
    this.consultationService.createSession(data).then(resData => {
      console.log("DoctorsComponent -> onConsultation -> resData", resData);
      this.router.navigate(['/video-conference'])
    }).catch(error => {
      console.log("DoctorsComponent -> onConsultation -> error", error);
    })
  }

  onSelectSlot(time) {
    this.selectedSlot = time;
  }

  selectEvent(item) {
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  ngOnInit(): void {

  }

  showtime(doctor) {
    this.show = doctor._id;
    console.log("DoctorsComponent -> showtime -> doctor", doctor);
    var session1Start = doctor.slots[0].session1Start.split(":");
    var session1End = doctor.slots[0].session1End.split(":");
    var session2Start = doctor.slots[0].session2Start.split(":");
    var session2End = doctor.slots[0].session2End.split(":");
    console.log("DoctorsComponent -> showtime -> session1Start", session1Start, session1End, session2Start, session2End)
    this.morningSlot = [];
    this.evningSlot = [];

    for (var i = parseInt(session1Start[0]); i < parseInt(session1End[0]); i++) {
      var hour = i < 10 ? '0' + i : i;
      if (i <= 13) {
        this.morningSlot.push({ label: hour + ':00', value: hour + ':00' });
        this.morningSlot.push({ label: hour + ':30', value: hour + ':30' });
      }
    }

    for (var i = parseInt(session2Start[0]); i < parseInt(session2End[0]); i++) {
      var hour = i < 10 ? '0' + i : i;
      if (i >= 13) {
        this.evningSlot.push({ label: hour + ':00', value: hour + ':00' });
        this.evningSlot.push({ label: hour + ':30', value: hour + ':30' });
      }
    }

  }

  avaialableclick() {
    this.aval = !this.aval;
  }

  getScroll() {
    $(window).scroll(function () {
      var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    $(window).scroll(function () {
      var sticky = $('.sticky1'),
        scroll = $(window).scrollTop();

      if (scroll >= 100 && scroll <= 1600) sticky.addClass('fixed1');
      else sticky.removeClass('fixed1');
    });

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 112) {
        $('.sticky-outer-wrapper').addClass('fixed-sticky-outer');
      } else {
        $('.sticky-outer-wrapper').removeClass('fixed-sticky-outer');
      }
    });

  }
}
