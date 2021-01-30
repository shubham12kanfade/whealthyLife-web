import { Component, OnInit } from '@angular/core';
import { MemberShipService } from './../../../services/member-ship.service';
import { UserService } from './../../../services/user.service';



@Component({
  selector: 'app-member-ship',
  templateUrl: './member-ship.component.html',
  styleUrls: ['./member-ship.component.scss']
})
export class MemberShipComponent implements OnInit {
  profileData: any;
  memberShipData: any[]=[];
  

  constructor(public memberShip:MemberShipService,
    public userService :UserService) {
      this.profileData =  this.userService.getUserInfo()
      console.log("MemberShipComponent -> profile -> this.profileData ", this.profileData )
      this.getMemberShip();
   }

  ngOnInit(): void {
  }

  getMemberShip(){
    this.memberShip.getmembership().then(resData =>{
      console.log("MemberShipComponent -> constructor -> resData", resData)
      this.memberShipData = resData.data
      console.log("MemberShipComponent -> getMemberShip -> this.memberShip", this.memberShip)
    }).catch(err =>{
      console.log("MemberShipComponent -> constructor -> err", err)
    })
  }

  BuyMember(docId,memberid,amount){
    console.log("MemberShipComponent -> BuyMember -> docId,memberid,amount", docId,memberid,amount)
   this.memberShip.BuyMemberShip(docId,memberid,amount).then(BuymemberRes =>{
    console.log("MemberShipComponent -> BuyMember -> BuymemberRes", BuymemberRes)
   }).catch(err =>{
    console.log("MemberShipComponent -> BuyMember -> err", err)
   })
  }

}
