import {Component, OnInit} from '@angular/core';
import {CartModel} from "../dto/cart.model";
import {Router} from "@angular/router";
import {SharedService} from "../service/shared.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  protected cartItems: CartModel[] = [];
  cartDataString = localStorage.getItem('cart_items') || '[]';
  grandTotal: number = 0;

  constructor(private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.cartItems = JSON.parse(this.cartDataString).map((item: { product: any; quantity: any; }) => ({
      product: item.product,
      quantity: item.quantity
    }));

    const formattedGrandTotal = this.cartItems.reduce((accumulator, item) => accumulator + (item.product.price * item.quantity), 0).toFixed(2);
    this.grandTotal = parseFloat(formattedGrandTotal);
    localStorage.setItem('totalPrice', JSON.stringify(this.grandTotal));
  }

  removeItem(cartProduct: CartModel) {
    const index = this.cartItems.findIndex(item => item.product.id === cartProduct.product.id && item.quantity === cartProduct.quantity);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
      const formattedGrandTotal = this.cartItems.reduce((accumulator, item) => accumulator + (item.product.price * item.quantity), 0).toFixed(2);
      this.grandTotal = parseFloat(formattedGrandTotal);
      localStorage.setItem('totalPrice', JSON.stringify(this.grandTotal));
    }
  }

  emptyCart() {
    this.cartItems = [];
    localStorage.removeItem('cart_items');
    localStorage.removeItem('totalPrice');
  }

  incrementStock(item: CartModel) {
    const index = this.cartItems.findIndex(cartProduct => cartProduct.product.id === item.product.id);
    if (item.quantity < item.product.stock) {
      item.quantity++;
    }

    this.cartItems[index] = item;
    localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
    const formattedGrandTotal = this.cartItems.reduce((accumulator, item) => accumulator + (item.product.price * item.quantity), 0).toFixed(2);
    this.grandTotal = parseFloat(formattedGrandTotal);
    localStorage.setItem('totalPrice', JSON.stringify(this.grandTotal));
  }

  decrementStock(item: CartModel) {
    const index = this.cartItems.findIndex(cartProduct => cartProduct.product.id === item.product.id);
    if (item.quantity > 0) {
      item.quantity--;
      if (item.quantity == 0) {
        this.removeItem(item);
      } else {
        this.cartItems[index] = item;
        localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
        const formattedGrandTotal = this.cartItems.reduce((accumulator, item) => accumulator + (item.product.price * item.quantity), 0).toFixed(2);
        this.grandTotal = parseFloat(formattedGrandTotal);
        localStorage.setItem('totalPrice', JSON.stringify(this.grandTotal));
      }
    }
  }

  navigate() {
    this.sharedService.products = this.cartItems.map((item: CartModel) => ({
      quantity: item.quantity,
      idProduct: parseInt(<string>item.product.id)
    }))
    this.router.navigate(['/cart/checkout']);
  };
}

