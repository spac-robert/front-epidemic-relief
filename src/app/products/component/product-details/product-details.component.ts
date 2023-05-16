import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {CartModel} from "../../../dto/cart.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductModel | undefined
  stock: number = 0;
  protected cartItems: Array<CartModel> = [];
  private cartDataString = localStorage.getItem('cart_items') || '[]';

  constructor(private service: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get('code');
    if (code != null) {
      this.product = this.service.getProductByCode(code);
    }
    this.cartItems = JSON.parse(this.cartDataString).map((item: {
      product: any;
      quantity: any;
    }) => ({product: item.product, quantity: item.quantity}));
  }

  incrementStock() {
    if (this.product?.stock) {
      if (this.stock < this.product?.stock) {
        this.stock++;
      }
    }
  }

  decrementStock() {
    if (this.stock > 0) {
      this.stock--;
    }
  }

  addToCart(product: ProductModel, quantity: number) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const item: CartModel = { quantity, product };
      this.cartItems.push(item);
    }

    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
  }
}
