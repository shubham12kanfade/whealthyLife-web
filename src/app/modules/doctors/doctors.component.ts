import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ConsultationService } from 'src/app/services/consultation.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { MatDialog } from '@angular/material/dialog';
import { SpecialityService } from 'src/app/services/speciality.service';
import { MessageService } from 'primeng/api';
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
  keyword = 'firstName';
  tempArray: any=[];
  showDatas: any;
  searchText: any;
  searchForm: FormGroup;
  DocID: any;

  constructor(public consultationService: ConsultationService,
    public userService: UserService,
    public router: Router,
    public dialog: MatDialog,
    public speciality :SpecialityService,
    public messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.getScroll();
    this.getDoctorList();
    this.speciality.getSpecializationAll().then((resData:any)=>{
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
    this.consultationService.getDoctorUsingId(this.DocID).then(resData => {
    console.log("DoctorsComponent -> getDoctorList -> resData++++++++++++++++", resData)
    
      this.doctorList = resData.data;
      this.tempArray = resData.data;
      this.doctorList.forEach(ele => this.autoDoctList.push(ele.userId));
    }).catch(error => {
      console.log("DoctorsComponent -> getDoctorList -> error", error);
    })
  }

    getfreeDocList(){
 
this.consultationService.getDoctFree().then((resData)=>{
console.log("DoctorsComponent -> getfreeDocList -> resData", resData)
  
}).catch((err)=>{
console.log("DoctorsComponent -> getfreeDocList -> err", err)
  
})
     
    }



  clear() {ActivatedRoute
    this.messageService.clear('myKey1');
}
  search(){
    this.doctorList = this.tempArray;
    this.doctorList = this.tempArray.filter(ele => ele.userId.firstName.includes(this.searchText.toLowerCase()));
    console.log("DoctorsComponent -> search -> this.searchText", this.searchText)
    if (!this.searchText) {
      this.doctorList = this.tempArray;
    }
  }
  onConsultation(id) {
    var data = {
      doctor: id
    }
    this.consultationService.createSession(data).then(resData => {
      // console.log("DoctorsComponent -> onConsultation -> resData", resData);
      this.router.navigate(['/video-conference'])
    }).catch(error => {
      console.log("DoctorsComponent -> onConsultation -> error", error);
    })
  }
  onSelectSlot(time) {
    this.selectedSlot = time;
  }
  selectEvent(item) {
  }
  onChangeSearch(val: string) {
  }c
  onFocused(e){
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    
      this.DocID= params['id'];
      // console.log("DoctorsComponent -> ngOnInit -> this.DocID++++++++++++++++++++++++", this.DocID)
      const free="free"
    if(this.DocID==free.toString)
      {
        this.getfreeDocList()
      }
      this.getDoctorList()
    
    
    
    
    })
  }
  showtime(doctor) {
    this.show = doctor._id;
    // console.log("DoctorsComponent -> showtime -> doctor", doctor);
    var session1Start = doctor.slots[0].session1Start.split(":");
    var session1End = doctor.slots[0].session1End.split(":");
    var session2Start = doctor.slots[0].session2Start.split(":");
    var session2End = doctor.slots[0].session2End.split(":");
    // console.log("DoctorsComponent -> showtime -> session1Start", session1Start, session1End, session2Start, session2End)
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
    // this.placesLoad();
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
