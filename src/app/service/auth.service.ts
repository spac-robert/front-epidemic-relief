import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Account, Login, LoginResponse} from "../dto/auth.model";
import {Observable} from "rxjs";

@Injectable(
  {providedIn: 'root'}
)
export class AuthService implements OnInit {

  user: Account | undefined;

  constructor(private http: HttpClient) {
  }

  login(login: Login): Observable<LoginResponse> {
    let url = "http://localhost:8080/auth/login"
    return this.http.post<LoginResponse>(url, login);
  }

  ngOnInit(): void {
    if (localStorage.getItem("user") != null) {
      // @ts-ignore
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }
}
