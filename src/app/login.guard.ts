import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {JwtHelperService} from '@auth0/angular-jwt';

import {Store} from '@ngrx/store';


export type RouteGuardReturnType =
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree;

@Injectable({

  providedIn: 'root',

})
export class AuthenticationGuardGuard implements CanActivate, CanActivateChild {


  canActivate(): RouteGuardReturnType {
    return this.checkForAuthentication();

  }

  canActivateChild(): RouteGuardReturnType {
    return this.checkForAuthentication();
  }

  checkForAuthentication(): RouteGuardReturnType {
    const jwtHelper = new JwtHelperService();
    return !!(localStorage.getItem("user") && !jwtHelper.isTokenExpired(localStorage.getItem("token")));
  }
}
