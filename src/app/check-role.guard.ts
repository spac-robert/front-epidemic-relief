import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, UrlTree} from '@angular/router';
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

  canActivate(): RouteGuardReturnType {
    return this.checkForAuthentication();

  }

  canActivateChild(): RouteGuardReturnType {
    return this.checkForAuthentication();
  }

  //TODO de vazut cu acest GUARD
  checkForAuthentication(): RouteGuardReturnType {
    const jwtHelper = new JwtHelperService();
    return !!(localStorage.getItem("user") && !jwtHelper.isTokenExpired(localStorage.getItem("token")) && this.user?.role === Role.ADMIN);
  }
}
