import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../../service/login-service.service";
import {Role} from "../../dto/auth.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  homeUrl = '';
  productsUrl = '/products';
  cartUrl = '/cart';
  loginUrl = '/auth/login';
  profileUrl = 'profile';
  logoutURL = 'auth/logout';
  addURL = 'product/add';
  addLotURL = 'product/add/lot';
  deleteURL = 'product/delete';
  updateURL = "product/update";

  token = localStorage.getItem("token")
  role: Role | null = null;

  constructor(private loginService: LoginServiceService) {
    this.loginService.getLoginSubject().subscribe((role) => {
      this.role = role;
      this.token = localStorage.getItem("token")
      console.log(role)
    })
  }

  ngOnInit(): void {
    this.loginService.getLoginSubject().subscribe((role) => {
      this.role = role;
      this.token = localStorage.getItem("token")
      console.log(role)
    })
  }

  protected readonly Role = Role;

}
