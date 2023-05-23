import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Role} from "../dto/auth.model";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loginSubject = new Subject<Role | null>();

  constructor() {
  }

  getLoginSubject(): Observable<Role|null> {
    return this.loginSubject.asObservable();
  }

  setLoginSubject(role: Role | null) {
    this.loginSubject.next(role);
  }
}
