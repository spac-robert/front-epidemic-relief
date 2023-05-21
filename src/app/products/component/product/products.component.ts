import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ProductModel} from "../../../dto/product.model";
import {AppState} from "../../../app.state";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  getAllProductSubscription: Subscription | undefined
  getSortedProductSubscription: Subscription | undefined
  totalLength: any;
  page: number = 1
  pageSize: number = 12
  sortBy: string = "name"
  sortDir: string = "asc"
  url = "/products/p/"

  products: ProductModel[] | undefined;
  searchQuery: string = '';

  constructor(private service: ProductService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    if (this.searchQuery.trim() === '') {
      this.getProducts(this.sortBy, this.sortDir, this.pageSize)
    }
  }

  ngOnDestroy(): void {
    this.getAllProductSubscription?.unsubscribe();
    this.getSortedProductSubscription?.unsubscribe();
  }

  getProducts(sortBy: string, sortDir: string, pageSize: number) {
    let request;
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      request = this.service.searchProducts(this.searchQuery, sortBy, sortDir, pageSize, this.page - 1);
    } else {
      request = this.service.getProducts(pageSize, this.page - 1, sortBy, sortDir);
    }
    this.getSortedProductSubscription = request.subscribe(
      (products) => {
        products.content.forEach(product => {
          if (product.mediaUrl!=null) {
            product.image = 'data:image/jpeg;base64,' + product.mediaUrl.data
          }
        })
        this.products = products.content;
        this.totalLength = products.totalElements;
        this.pageSize = products.pageable.pageSize;
        this.page = products.pageable.pageNumber + 1;
      }
    );
  }

  onPageChange($event: number) {
    this.page = $event
    if (this.searchQuery.trim() === '') {
      this.getProducts(this.sortBy, this.sortDir, this.pageSize)
    }
  }

  searchProducts() {
    this.getProducts(this.sortBy, this.sortDir, this.pageSize)
  }
}
