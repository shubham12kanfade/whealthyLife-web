import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {
  active: String = "record";
  email: any;

  constructor(public router: Router, public UserService: UserService) {
    console.log("DriveComponent -> constructor -> router", router.url)


  const data  =this.UserService.getUserInfo()
  this.email = data.email
  }


  ngOnInit(): void {

  }
  navigation(val) {
    this.active = val;
    this.router.navigateByUrl('/my/' + val);
  }
}
