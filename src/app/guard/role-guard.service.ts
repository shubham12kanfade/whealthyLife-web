import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private router: Router,
    private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userDesignation = this.userService.getUserDesignation();
    if (userDesignation == 'Doctor') {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
