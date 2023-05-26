import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../service/login-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router) {
    this.loginService.setLoginSubject(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  ngOnInit(): void {
    this.loginService.setLoginSubject(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.router.navigateByUrl("");
  }

}
