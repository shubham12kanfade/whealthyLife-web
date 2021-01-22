import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-member-ship',
  templateUrl: './member-ship.component.html',
  styleUrls: ['./member-ship.component.scss']
})
export class MemberShipComponent implements OnInit {
  memberShip: any;

  constructor(public mainService:MainService) {
    this.mainService.getmembership().then(resData =>{
      console.log("MemberShipComponent -> constructor -> resData", resData)
      this.memberShip = resData.data
    }).catch(err =>{
      console.log("MemberShipComponent -> constructor -> err", err)
    })
   }

  ngOnInit(): void {
  }



}
