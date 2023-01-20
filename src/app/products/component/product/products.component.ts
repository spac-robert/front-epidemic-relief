import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ProductModel} from "../../../dto/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: ProductModel | undefined
  totalLength: any;
  page: number = 0
  pageSize: number = 10
  sortBy: string = "name"
  sortDir: string = "asc"
  products$: ProductModel[] | undefined
  url = "/products/p/"

  constructor(private service: ProductService) {
  }

  //TODO de facut paginarea
  //TODO sa setes sort-ul dupa anumite criterii si tipul de sortare asc sau desc si page number astea sa se ia
  //din html. Exemplu e pe ChatGPT am si ss facut cu asta

  //TODO imi apar produsele, dar dupa ce dau refresh imi dispar
  ngOnInit(): void {
    this.products$ = this.service.getProducts(this.pageSize, this.page, this.sortBy, this.sortDir);
    this.totalLength = this.products$.length

    // //sa iau toate produsele in products
    // this.service.getProducts().subscribe((result) => {
    //   this.products = result;
    //   this.totalLength = result.length;
    //
    // })
    //this.product = this.service.getProductByCode("1")
    //this.url = "/products/p/" + this.product?.id;

  }

  getProducts(sortBy: string, sortDir: string, $event: number, pageSize: number) {
    this.products$ = this.service.getProducts(pageSize, this.page, sortBy, sortDir);
  }
}
