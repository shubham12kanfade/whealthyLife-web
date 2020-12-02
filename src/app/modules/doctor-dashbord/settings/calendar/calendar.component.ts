import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  NAME: string;
  TYPE: string;
  STREANGTH: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { NAME: 'Practice - qweqw - Kattupakkam', TYPE: 'Mon to Sun: 9:00am-7:00pm', STREANGTH: 'Edit'},
  { NAME: 'Madha vyas', TYPE: 'Mon to Sun: 9:00am-7:00pm', STREANGTH: 'Edit'},
];


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calender: boolean=false;

  displayedColumns: string[] = ['NAME', 'TYPE', 'STREANGTH',];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() { }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)
    this.dataSource.paginator = this.paginator;
  }
calendermodal(){
  this.calender=!this.calender;
}
}
