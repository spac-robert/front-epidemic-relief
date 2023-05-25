import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Account, Login, LoginResponse, Register} from "../dto/auth.model";
import {catchError, map, Observable, of} from "rxjs";


@Injectable(
  {providedIn: 'root'}
)
export class AuthService implements OnInit {

  user: Account | undefined;

  constructor(private http: HttpClient) {
  }

  login(login: Login): Observable<HttpResponse<LoginResponse>> {
    let url = "http://localhost:8080/auth/login"
    return this.http.post<LoginResponse>(url, login,{observe: 'response'});
  }

  register(register: Register): Observable<HttpResponse<any>> {
    let url = "http://localhost:8080/auth/register";
    return this.http.post<HttpResponse<any>>(url, register, {observe: 'response'});
  }

  ngOnInit(): void {
    if (localStorage.getItem("user") != null) {
      // @ts-ignore
      this.user = JSON.parse(localStorage.getItem('user'))
    }
  }
}
