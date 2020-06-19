import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }


  // showtime(doctor) {
  //   this.show = doctor._id;
  //   console.log("DoctorsComponent -> showtime -> doctor", doctor);
  //   var session1Start = doctor.slots[0].session1Start.split(":");
  //   var session1End = doctor.slots[0].session1End.split(":");
  //   var session2Start = doctor.slots[0].session2Start.split(":");
  //   var session2End = doctor.slots[0].session2End.split(":");
  //   console.log("DoctorsComponent -> showtime -> session1Start", session1Start, session1End, session2Start, session2End)
  //   this.morningSlot = [];
  //   this.evningSlot = [];

  //   for (var i = parseInt(session1Start[0]); i < parseInt(session1End[0]); i++) {
  //     var hour = i < 10 ? '0' + i : i;
  //     if (i <= 13) {
  //       this.morningSlot.push({ label: hour + ':00', value: hour + ':00' });
  //       this.morningSlot.push({ label: hour + ':30', value: hour + ':30' });
  //     }
  //   }

  //   for (var i = parseInt(session2Start[0]); i < parseInt(session2End[0]); i++) {
  //     var hour = i < 10 ? '0' + i : i;
  //     if (i >= 13) {
  //       this.evningSlot.push({ label: hour + ':00', value: hour + ':00' });
  //       this.evningSlot.push({ label: hour + ':30', value: hour + ':30' });
  //     }
  //   }

  // }

}
