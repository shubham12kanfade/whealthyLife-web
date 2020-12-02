import { Component, OnInit, ViewChild } from '@angular/core';
import { PaitentsService } from './../../../services/paitents.service';
import { UserService } from './../../../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



export interface PeriodicElement {
  position: number;
  appointmenType: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  status: string;
  slotType: string;
  avatar: string;
 }

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'avatar', 'doctorName', 'date', 'time', 'status', 'slotType', 'appoinmentType'];
  displayedColumns2: string[] = ['position', 'avatar', 'paitentName', 'date', 'time', 'status', 'slotType', 'appoinmentType'];


  doctor: any;
  doctorId: any;
  petient: any;
  paitentId: any;
  appointment: any [] = [];
  Docappointment: any [] = [];
  spin: boolean = true;

  dataSource = new MatTableDataSource<PeriodicElement>(this.appointment);
  dataSource2 = new MatTableDataSource<PeriodicElement>(this.Docappointment);
  designation: any;




  @ViewChild(MatPaginator) set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
    this.dataSource2.paginator = value;
  };


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table', { static: true }) table;


  constructor(public userService : UserService, public paitentService : PaitentsService) {

    this.petient = this.userService.getUserInfo()

    this.doctor = this.userService.getUserInfo()
    this.designation = this.doctor.designation



  }

  ngOnInit(): void {

    this.getDocAppoint()
    this.getAppoint()

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.spin = false;

    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
    this.spin = false;

  }

  getDocAppoint(){
    const data = {
      doctorId: this.doctor._id
    }

    this.paitentService.getAppointment(data).then(DoctorRes => {
      this.Docappointment = DoctorRes.data

      this.dataSource2.data = this.Docappointment

    }).catch(error => {
    console.log("AppointmentsComponent -> getAppoint -> error", error);
    })


  }


  getAppoint(){

    const data = {
      petientId: this.petient._id
    }

    this.paitentService.getAppointment(data).then(paitentRes => {
      this.appointment = paitentRes.data
      this.dataSource.data = this.appointment
    }).catch(error => {
    console.log("AppointmentsComponent -> getAppoint -> error", error);
    })

  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
      this.dataSource2.paginator.firstPage();
    }
  }

}
