import {Component} from '@angular/core';
import {Login} from "../dto/auth.model";
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
  error: string | undefined = "";

  constructor(private service: AuthService, private router: Router, private loginService: LoginServiceService) {
  }

  submitLogin() {
    this.service.login(this.login)
      .subscribe(
        (response) => {
          if (response.ok) {
            if (response.body) {
              localStorage.setItem("user", JSON.stringify(response.body.user));
              localStorage.setItem("token", response.body.token);
              this.loginService.setLoginSubject(response.body.user.role);
              this.router.navigateByUrl('/');
            }
          } else {
            console.log('Bad request:', response.body);
          }
        },
        (error) => {
          console.error('Error:', error);
          this.error = error.error.error;
          setTimeout(() => {
            this.error = "";
          }, 10000);
        }
      );
  }
}
