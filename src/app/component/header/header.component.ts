import { MainService } from './../../services/main.service';
import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import io from 'socket.io-client';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: any = false;
  userInfo: any;
  onlieProfile: any;

  constructor(public userService: UserService,
    public router: Router,
    public messageService: MessageService,
    private MainService:MainService

  ) {
    this.scrollUp();
    const socket = io('http://169.254.8.146:3311/');
    socket.on('connect', (resData) => {
      console.log("HeaderComponent -> resData", resData)
      console.log(socket.connected); // true
    });
    socket.on('', (resData) => {
      console.log("HeaderComponent -> resData", resData)
      console.log(socket.connected); // true
    });
    // socket.on('disconnect', () => {
    //   console.log(socket.connected); // false
    // });
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


this.getProfileOnline();

    if (this.userInfo.designation === 'Doctor') {
      this.showToast('success', "sdsdsjds", "dsdsdsd");
    }
  }

  getProfileOnline(){
this.MainService.getProfile().then((resData)=>{
console.log("HeaderComponent -> getProfileOnline -> resData +++++++++++++++++++++++++++++++++++++++++++++++++++++", resData)
  this.onlieProfile=resData.data
}).catch((err)=>{
console.log("HeaderComponent -> getProfileOnline -> err", err)
  
})

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



  clear() {
    this.messageService.clear('myKey2');
  }

  showToast(type, messageType, message) {
    console.log("HeaderComponent -> showToast -> type, messageType, message", type, messageType, message)
    setTimeout(() => {
      this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Summary Text', detail: 'Order submitted', life: 50000 });
      console.log("HeaderComponent -> showToast -> this.messageService", this.messageService);
    }, 1000);
  }
}
