import { PaitentsService } from './../../../services/paitents.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {


  show: boolean=false;

  PatientDate: string="today";

  activeTab = 'today';
  DoctId: any;
  paitent: any;

  alllPaitent: any = [];
  weekPaitent: any = [];
  todaylPaitent: any = [];

  weekpaitent: any;
  todaypaitent: any;
  Allpaitent: any;
  constructor(public userService : UserService, public paitentService : PaitentsService) {

         this.DoctId= this.userService.getUserInfo()



        this.paitentService.getAllPaitent(this.DoctId._id).then(resData=>{
          console.log("PatientsComponent -> constructor -> resData", resData);
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
   }




  ngOnInit(): void {
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



}
