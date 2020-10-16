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
  constructor(public userService : UserService, public paitentService : PaitentsService) {

         this.DoctId= this.userService.getUserInfo()
        console.log(": --------------------------------------------------");
        console.log("PatientsComponent -> constructor -> DoctId", this.DoctId);
        console.log(": --------------------------------------------------");



        this.paitentService.getAllPaitent(this.DoctId._id).then(resData=>{
          console.log("PatientsComponent -> constructor -> resData", resData);
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
