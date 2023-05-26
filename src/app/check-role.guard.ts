import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {JwtHelperService} from '@auth0/angular-jwt';
import {Account, Role} from "./dto/auth.model";


export type RouteGuardReturnType =
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree;

@Injectable({

  providedIn: 'root',

})
export class CheckRoleGuard implements CanActivate, CanActivateChild {

  // @ts-ignore
  user: Account | undefined = JSON.parse(localStorage.getItem('user'));


  constructor(private router: Router) {
  }

  canActivate(): RouteGuardReturnType {
    return this.checkForAuthentication();
  }

  canActivateChild(): RouteGuardReturnType {
    return this.checkForAuthentication();
  }

  checkForAuthentication(): RouteGuardReturnType {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("user"));
    const jwtHelper = new JwtHelperService();
    if (!!(localStorage.getItem("user") && !jwtHelper.isTokenExpired(localStorage.getItem("token")) && this.user?.role.toString() === "ADMIN")) {
      return true;
    } else {
      this.router.navigateByUrl("");
      return false;
    }
  }
}
