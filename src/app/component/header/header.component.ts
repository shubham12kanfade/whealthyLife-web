import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: any = false;
  userInfo: any;

  constructor(public userService: UserService,
    public router: Router) {
    this.scrollUp();
  }


  onProfile() {
    console.log("HeaderComponent -> onProfile -> this.userInfo.designation", this.userInfo.designation)
    console.log("HeaderComponent -> onProfile -> this.userInfo.designation == 'Doctor'", this.userInfo.designation == 'Doctor')
    if (this.userInfo.designation == 'Doctor') {
      this.router.navigate(['/Doctor']);
    } else {
      this.router.navigate(['/'])
    }
  }


  checkLogin() {
    this.userInfo = this.userService.getUserInfo();
    console.log("HeaderComponent -> checkLogin -> this.userInfo ", this.userInfo)
  }

  ngOnInit(): void {
  }

  onClick() {

  }

  onLogOut() {
    if (window.confirm('are you really want to logout ?')) {
      this.userService.logOut();
      this.checkLogin();
    }
  }

  onMenu(type) {
    this.openMenu = type;
  }

  scrollUp() {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 5) {
        $('.navigation-wrap').addClass('fixed-header');
      } else {
        $('.navigation-wrap').removeClass('fixed-header');
      }
    });
    this.userService.getUserLoginStatus().subscribe(resData => {
      this.checkLogin();
    })
  }
}
