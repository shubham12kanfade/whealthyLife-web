import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingAuthGuard implements CanActivate {
  constructor(private UserService:UserService, private Router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 


if(this.UserService.getUserToken()){
return true;
}
else{
  this.Router.navigate([""])
  return false;
}
  }
}
