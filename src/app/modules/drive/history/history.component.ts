import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class HistoryComponent implements OnInit {


  displayedColumns: string[] = ['position', 'avatar', 'Doctor Name', 'Date', 'Time', 'Duration', 'Status', 'Appointment Slot'];
  // dataSource = new MatTableDataSource<PeriodicElement>(UserData);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {  }

  ngOnInit(): void {

    // this.dataSource = new MatTableDataSource<PeriodicElement>(UserData);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

}

export interface PeriodicElement {
  position: number;
  appointmenType: string;
  date: number;
  time: number;
  doctorName: string;
  firstName: string;
  lastName: string;
  status: string;
  slotType: string;
  avatar: string;
 }

/** Constants used to fill up our data base. */
// const UserData: PeriodicElement[] = [
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Guddu Pandit', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Golu Gupta', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Akhandanand Tripati', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Beena Tripati', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Munna Tripati', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Bablu Pandit', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Makbul', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Raju', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Guddu Pandit', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Guddu Pandit', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Guddu Pandit', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },
//   {position: 1, avatar: 'skcbadcb', doctorName: 'Guddu Pandit', date: 11-10-2020, time: 00:00, appointmenType: 'Morning Slot' },

// ];



