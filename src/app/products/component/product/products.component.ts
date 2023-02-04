import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ProductModel} from "../../../dto/product.model";
import {AppState} from "../../../app.state";
import {Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  getAllProductSubscription: Subscription | undefined
  getSortedProductSubscription: Subscription | undefined
  totalLength: any;
  page: number = 0
  pageSize: number = 100
  sortBy: string = "name"
  sortDir: string = "asc"
  url = "/products/p/"

  products: ProductModel[] | undefined;


  constructor(private service: ProductService, private store: Store<AppState>) {
    // this.products = store.select(selectProductList);
  }


  //TODO sa adaug stock la produse
  //TODO sa vad de ce dispar cand dau refresh si dc nu apar cand dau din prima pe /products

  //TODO imi apar produsele, dar dupa ce dau refresh imi dispar
  //TODO sa fac un sort-control-group ca pe emag cu sort si filters

  // ngOnInit(): void {
  //   this.getAllProductSubscription = this.service.getProducts(this.pageSize, this.page, this.sortBy, this.sortDir).subscribe(
  //     (products) => {
  //       products.forEach(product => {
  //         product.image = 'data:image/jpeg;base64,' + product.mediaUrl.data
  //       })
  //       this.products = products
  //     }
  //   );
  // }
  ngOnInit(): void {
    this.getProducts(this.sortBy, this.sortDir, this.pageSize)
  }

  ngOnDestroy(): void {
    this.getAllProductSubscription?.unsubscribe();
    this.getSortedProductSubscription?.unsubscribe();
  }

  getProducts(sortBy: string, sortDir: string, pageSize: number) {
    this.getSortedProductSubscription = this.service.getProducts(pageSize, this.page, sortBy, sortDir).subscribe(
      (products) => {
        products.forEach(product => {
          product.image = 'data:image/jpeg;base64,' + product.mediaUrl.data
        })
        this.products = products
      }
    );
  }

}
