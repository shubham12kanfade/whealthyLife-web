import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo = new BehaviorSubject(null);
  constructor(public storage: CookieService) { }

  addUserInfo(data){
    this.storage.set('userInfo_wealthyLife', JSON.stringify(data));
    this.storage.set('userInfo_token', data.token);
    this.userInfo.next(data);
    return;
  }

  getUserLoginStatus(){
    return this.userInfo;
  }
  
  getUserInfo(){
    return this.storage.get('userInfo_wealthyLife');
  }

  getUserToken(){
    return this.storage.get('userInfo_token');
  }

  logOut(){
    this.storage.deleteAll();
  }
}
