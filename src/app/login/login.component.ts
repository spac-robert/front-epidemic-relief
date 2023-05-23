import {Component} from '@angular/core';
import {Login, LoginResponse} from "../dto/auth.model";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {LoginServiceService} from "../service/login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  registerUrl: string = "/auth/register";
  login: Login = {
    email: "",
    password: ""
  }

  constructor(private service: AuthService, private router: Router, private loginService: LoginServiceService) {
  }

  submitLogin() {
    this.service.login(this.login).subscribe((loginResponse: LoginResponse) => {
      console.log(loginResponse);
      localStorage.setItem("user", JSON.stringify(loginResponse.user));
      localStorage.setItem("token", loginResponse.token);
      this.loginService.setLoginSubject(loginResponse.user.role);
      this.router.navigateByUrl('/');
    })
  }

}
