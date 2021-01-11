import { UserService } from './../../../services/user.service';
import { DashboardAnalyticsService } from './../../../services/dashboard-analytics.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DoctorProfileService } from 'src/app/services/doctor-profile.service';





@Component({
  selector: 'app-dashbord-home',
  templateUrl: './dashbord-home.component.html',
  styleUrls: ['./dashbord-home.component.scss']
})
export class DashbordHomeComponent implements OnInit {
  
  

  profile: any;
  on: boolean = false;
  off: boolean = false;
  color = 'primary';
  id: any;
  
 
  constructor(public DAS:DashboardAnalyticsService, public UserService:UserService,
    public fb: FormBuilder,
   public mainService :MainService,
   private docProfileService :DoctorProfileService) {

    const id= this.UserService.getUserInfo()

    this.mainService.getProfile().then(resData => {
      this.profile = resData.data
      console.log("file: dashbord-home.component.ts ~ line 37 ~ DashbordHomeComponent ~ this.mainService.getProfile ~ this.profile", this.profile)
      this.id =  this.profile?._id
      console.log("file: dashbord-home.component.ts ~ line 43 ~ DashbordHomeComponent ~ this.mainService.getProfile ~ this.id", this.id)
      if(this.profile.isOnline == true){
        this.on = true;
      }else{
        this.on = false;
      }
    }).catch(err => {
      console.log("file: dashbord-home.component.ts ~ line 37 ~ DashbordHomeComponent ~ this.mainService.getAllProfile ~ err", err)
    })
 
  }

  

  ngOnInit(): void {
    this.getDocSlot()
  }

  getDocSlot(){
    this.docProfileService.getDocSlots(this.id).then(SlotsData => {
      console.log("file: dashbord-home.component.ts ~ line 88 ~ DashbordHomeComponent ~ this.docProfileService.getDocSlots ~ SlotsData", SlotsData)
    }).catch(err => {
      console.log("file: dashbord-home.component.ts ~ line 90 ~ DashbordHomeComponent ~ this.docProfileService.getDocSlots ~ err", err)   
    })
  }
  
  setValue($e){
    console.log("file: dashbord-home.component.ts ~ line 49 ~ DashbordHomeComponent ~ setValue ~ e", $e)
    if($e.checked){
      this.on= true;
      const data = {
        isOnline: this.profile.isOnline = 'true'
      }
      console.log("file: dashbord-home.component.ts ~ line 55 ~ DashbordHomeComponent ~ setValue ~ data", data)
      this.mainService.updateUserprofile(data).then(onlineData => {
        console.log("file: dashbord-home.component.ts ~ line 56 ~ DashbordHomeComponent ~ this.mainService.updateUserprofile ~ onlineData", onlineData)  
      }).catch(error => {
        console.log("file: dashbord-home.component.ts ~ line 59 ~ DashbordHomeComponent ~ this.mainService.updateUserprofile ~ error", error)
      })
    }else{
      this.on = false;
      const data = {
        isOnline: this.profile.isOnline = 'false'
      }
      console.log("file: dashbord-home.component.ts ~ line 66 ~ DashbordHomeComponent ~ setValue ~ data", data)
      this.mainService.updateUserprofile(data).then(onlineData => {
        console.log("file: dashbord-home.component.ts ~ line 68 ~ DashbordHomeComponent ~ this.mainService.updateUserprofile ~ onlineData", onlineData)
      }).catch(error => {
        console.log("file: dashbord-home.component.ts ~ line 59 ~ DashbordHomeComponent ~ this.mainService.updateUserprofile ~ error", error)
      })
    }
  }

}






