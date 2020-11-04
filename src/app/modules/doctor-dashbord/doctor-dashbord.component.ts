import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { MainService } from 'src/app/services/main.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-doctor-dashbord',
  templateUrl: './doctor-dashbord.component.html',
  styleUrls: ['./doctor-dashbord.component.scss']
})

export class DoctorDashbordComponent implements OnInit {


  userInfo: any;
  doctorInfo: any;

  constructor(public router: Router,
    public mainService: MainService,
    public userService: UserService) {
  }

  onLogOut() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


getDoctordata(){
this.mainService.getProfile().then((resData)=>{
this.doctorInfo=resData.data

}).catch((error)=>{
console.log("DoctorDashbordComponent -> getDoctordata -> error", error)

})

}


  ngOnInit(): void {
    this.getDoctordata()
    // this.router.events.subscribe((resData: any) => {
    //   console.log("resData", resData.url);
    //   if (resData && resData.url !== undefined && resData.url !== '/Doctor/Profile/edit_profile') {
        this.userInfo = this.userService.getUserInfo();
        if (!this.userInfo) {
          this.router.navigate(['/']);
        } else {
          this.mainService.getProfileCompletion().then(resp => {
            console.log("DoctorDashbordComponent -> resp", resp);
            if (resp.data && resp.data.completed <= 80) {
              this.router.navigate(['/Doctor/Profile/edit_profile'])
            }
          }).catch(error => {
            console.log("DoctorDashbordComponent -> error", error)
          })
        }
    //   }
    // })
  }
}
