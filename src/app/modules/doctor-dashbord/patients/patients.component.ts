import { PaitentsService } from './../../../services/paitents.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  appointmenType: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  status: string;
 }



@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit  {

  displayedColumns: string[] = ['position', 'paitentName', 'appointmentType', 'date', 'status', 'time'];
  userAppointment: any =[];
  doctormm: any = [];

  dataSource = new MatTableDataSource<PeriodicElement>(this.userAppointment);


  @ViewChild(MatPaginator) set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  };

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table', { static: true }) table;




  show: boolean=false;

  PatientDate: string="today";

  activeTab = 'today';
  DoctId: any;
  paitent: any;
  spin: boolean = true;

  alllPaitent: any = [];
  weekPaitent: any = [];
  todaylPaitent: any = [];

  weekpaitent: any;
  todaypaitent: any;
  Allpaitent: any;
  doctor: any = [];
  paitentId: any =[];
  appointment: any =[];
  appoType: any;
  date: any;
  constructor(public userService : UserService, public paitentService : PaitentsService,
    ) {

         this.DoctId= this.userService.getUserInfo();

        this.paitentService.getAllPaitent(this.DoctId._id).then(resData=>{

           this.Allpaitent = resData.data.AllPaitent.length;
           this.todaypaitent = resData.data.TodayPaitent.length;
           this.weekpaitent = resData.data.WeeKPaitent.length;

           for (let i = 0 ; i <  resData.data.AllPaitent.length; i++ ){

            this.alllPaitent[i] = resData.data.AllPaitent[i].petient
          }

          for (let i = 0 ; i < resData.data.TodayPaitent.length; i++ ){

            this.todaylPaitent[i] = resData.data.TodayPaitent[i].petient
          }

          for (let i = 0 ; i < resData.data.WeeKPaitent.length; i++ ){

            this.weekPaitent[i] = resData.data.WeeKPaitent[i].petient
          }

        }).catch(error =>{
          console.log("PatientsComponent -> constructor -> error", error);
        })


        this.getAppoint();



   }


   getAppoint(){

    this.paitentService.getAppointment(this.DoctId._id).then(AppointmentRes => {
    console.log(": -----------------------------------------------------------------");
    console.log("PatientsComponent -> getAppoint -> AppointmentRes", AppointmentRes);
    console.log(": -----------------------------------------------------------------");
    for(let i = 0; i< AppointmentRes.data.length; i++){

      this.doctor = AppointmentRes.data[i] && AppointmentRes.data[i].doctor && AppointmentRes.data[i].doctor._id
      this.paitent = AppointmentRes.data[i] && AppointmentRes.data[i].petient && AppointmentRes.data[i].petient._id


      if(this.DoctId._id == this.doctor){
        this.appointment[i] = AppointmentRes.data[i]
        console.log(": ---------------------------------------------------------------------");
        console.log("PatientsComponent -> getAppoint -> this.appointment[i]", this.appointment[i]);
        console.log(": ---------------------------------------------------------------------");
      }

    }

    }).catch(error => {
    console.log("PatientsComponent -> getAppoint -> error", error);
    })


   }

   onClick(id){
    this.paitentService.getAppointment(this.DoctId._id).then(Appointment => {
      console.log(": -----------------------------------------------------------------");
      console.log("PatientsComponent -> getAppoint -> Appointment", Appointment);
      console.log(": -----------------------------------------------------------------");
      for(let a = 0; a< Appointment.data.length; a++){

        this.paitent = Appointment.data[a] && Appointment.data[a].petient && Appointment.data[a].petient._id

          if(this.paitent == id){
            this.userAppointment[a] = Appointment.data[a]
            console.log(": ---------------------------------------------------------------------");
            console.log("PatientsComponent -> getAppoint -> this.userAppointment[a]", this.userAppointment[a]);
            console.log(": ---------------------------------------------------------------------");

            this.dataSource.data = this.userAppointment;

          }
      }

      }).catch(error => {
      console.log("PatientsComponent -> getAppoint -> error", error);
      })



   }

  ngOnInit(): void {


    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.spin = false;

  }


  today(activeTab){
    this.activeTab = activeTab;
    this.PatientDate="today"
  }


  recent(activeTab){
    this.activeTab = activeTab;
    this.PatientDate="recent"
  }

  all(activeTab){
    this.activeTab = activeTab;
    this.PatientDate="all"
  }

  showpopup(){
    this.show=!this.show;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}




