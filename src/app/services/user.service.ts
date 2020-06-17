import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo = new BehaviorSubject(null);

  constructor(public storage: CookieService) { }

  addUserInfo(data) {
    this.storage.set('userInfo_WhealthyLife', JSON.stringify(data));
    this.storage.set('userInfo_token', data.token);
    this.userInfo.next(data);
    return;
  }

  getUserLoginStatus() {
    return this.userInfo;
  }

  getUserInfo() {
    console.log("UserService -> getUserInfo -> this.storage.get('userInfo_WhealthyLife')", this.storage.get('userInfo_WhealthyLife'))
    if (this.storage.get('userInfo_WhealthyLife')) {
      return JSON.parse(this.storage.get('userInfo_WhealthyLife'));
    } else {
      return false;
    }
  }

  getUserDesignation() {
    if (this.storage.get('userInfo_WhealthyLife')) {
      return JSON.parse(this.storage.get('userInfo_WhealthyLife')).designation;
    } else {
      return false;
    }
  }

  getUserToken() {
    if (this.storage.get('userInfo_WhealthyLife')) {
      return this.storage.get('userInfo_token');
    } else {
      return false;
    }
  }

  logOut() {
    this.storage.deleteAll();
    this.userInfo.next(null);
  }
}
