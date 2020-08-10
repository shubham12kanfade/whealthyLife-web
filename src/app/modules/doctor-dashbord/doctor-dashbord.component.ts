import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-doctor-dashbord',
  templateUrl: './doctor-dashbord.component.html',
  styleUrls: ['./doctor-dashbord.component.scss']
})
export class DoctorDashbordComponent implements OnInit {
  userInfo: any;

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


  ngOnInit(): void {
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
