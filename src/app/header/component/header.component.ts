import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  homeUrl = '';
  productsUrl = '/products';
  //TODO aici sa imi afiseze cartul persoanei conectate (ca si quest sau cu contul lui)
  cartUrl = '/cart';
}
