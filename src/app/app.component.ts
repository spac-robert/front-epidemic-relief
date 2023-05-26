import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "./service/login-service.service";
import {Account} from "./dto/auth.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-epidemic-relief-v3';
  // @ts-ignore
  user: Account | undefined = JSON.parse(localStorage.getItem('user'));


  constructor(private loginService: LoginServiceService) {
    if (this.user) {
      this.loginService.setLoginSubject(this.user.role)
    }
  }

  ngOnInit(): void {
    if (this.user) {
      this.loginService.setLoginSubject(this.user.role)
    }
  }
}
