import { DoctorProfileService } from './../../../services/doctor-profile.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  Doctor: any;
  cook: any;

  constructor(public mainService: MainService,public UserService:UserService,public DoctorProfileService:DoctorProfileService) {
    this.cook=UserService.getUserInfo();
    this.getDoctodata(this.cook._id);
    
  }





   getDoctodata(data){
     
    this.DoctorProfileService.getDoctorProfileid(data).then((resData)=>{
    console.log("ProfileComponent -> getDoctodata -> resData", resData)

    }).catch((errr)=>{
    console.log("ProfileComponent -> getDoctodata -> errr", errr)
      
    })
   }

  ngOnInit(): void {
   
  }

}
