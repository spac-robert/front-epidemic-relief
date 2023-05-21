import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  homeUrl = '';
  productsUrl = '/products';
  cartUrl = '/cart';
  loginUrl = '/auth/login';
  profileUrl = '/profile';

  token = localStorage.getItem("token")
}
