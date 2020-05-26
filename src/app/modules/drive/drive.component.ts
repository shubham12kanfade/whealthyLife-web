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
  constructor(public router: Router) {
    console.log("DriveComponent -> constructor -> router", router.url)

  }


  ngOnInit(): void {
  }
  navigation(val) {
    this.active = val;
    this.router.navigateByUrl('/my/' + val);
  }
}
