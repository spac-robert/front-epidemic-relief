import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ProductModel} from "../../../dto/product.model";
import {AppState} from "../../../app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectProductList} from "../../../store/selector/product.selector";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: ProductModel | undefined
  totalLength: any;
  page: number = 0
  pageSize: number = 100
  sortBy: string = "name"
  sortDir: string = "asc"
  products$: ProductModel[] | undefined
  url = "/products/p/"

  products: Observable<ProductModel[]>;

  constructor(private service: ProductService, private store: Store<AppState>) {
    this.products = store.select(selectProductList);
  }

  //TODO sa adaug stock la produse
  //TODO sa vad de ce dispar cand dau refresh si dc nu apar cand dau din prima pe /products

  //TODO imi apar produsele, dar dupa ce dau refresh imi dispar
  //TODO sa fac un sort-control-group ca pe emag cu sort si filters

  ngOnInit(): void {
    this.products$ = this.service.getProducts(this.pageSize, this.page, this.sortBy, this.sortDir);
    console.log(this.products$)
    this.totalLength = this.products$.length

  }

  getProducts(sortBy: string, sortDir: string, pageSize: number) {
    console.log(this.products$)
    console.log(sortBy)
    console.log(sortDir)
    this.products$ = this.service.getProducts(pageSize, this.page, sortBy, sortDir);
    console.log(this.products$)

  }

}
