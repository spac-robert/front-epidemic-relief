import {Component, OnInit} from '@angular/core';
import {CartModel} from "../dto/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  protected cartItems: CartModel[] = [];
  cartDataString = localStorage.getItem('cart_items') || '[]';
  grandTotal: number = 0;

  ngOnInit(): void {
    this.cartItems = JSON.parse(this.cartDataString).map((item: { product: any; quantity: any; }) => ({
      product: item.product,
      quantity: item.quantity
    }));
    this.grandTotal = this.cartItems.reduce((accumulator, item) => accumulator + (item.product.price * item.quantity), 0);
  }

  removeItem(cartProduct: CartModel) {
    const index = this.cartItems.findIndex(item => item.product.id === cartProduct.product.id);
    if (index !== -1) {
      this.cartItems.splice(index,1);
      localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
    }
  }

  emptyCart() {
    this.cartItems = [];
    localStorage.removeItem('cart_items');
  }

  incrementStock(item: CartModel) {
    const index = this.cartItems.findIndex(cartProduct => cartProduct.product.id === item.product.id);
    //TODO validare sa nu depaseasca mai mult de stock-ul produsului
    item.quantity++;
    this.cartItems[index] = item;

    localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
    this.grandTotal = this.cartItems.reduce((accumulator, item) => accumulator + (item.product.price * item.quantity), 0);
  }

  decrementStock(item: CartModel) {
    const index = this.cartItems.findIndex(cartProduct => cartProduct.product.id === item.product.id);
    if (item.quantity > 0) {
      item.quantity--;
      if (item.quantity == 0) {
        this.removeItem(item);
      }else {
        this.cartItems[index] = item;
        localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
        this.grandTotal = this.cartItems.reduce((accumulator, item) => accumulator + (item.product.price * item.quantity), 0);
      }
    }
  }
}
