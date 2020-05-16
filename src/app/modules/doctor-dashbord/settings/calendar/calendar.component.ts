import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calender: boolean=false;


  constructor() { }
  
  ngOnInit(): void {
  }
calendermodal(){
  this.calender=!this.calender;
}
}
