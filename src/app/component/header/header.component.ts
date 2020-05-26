import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: any = false;
  userInfo: any;

  constructor(public userService: UserService) {
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


  checkLogin() {
    this.userInfo = this.userService.getUserInfo();
  }

  ngOnInit(): void {
  }

  onClick() {

  }

  onLogOut() {
    this.userService.logOut();
    this.checkLogin();
  }

  onMenu(type) {
    this.openMenu = type;
  }
}
