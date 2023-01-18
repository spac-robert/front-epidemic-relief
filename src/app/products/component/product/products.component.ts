import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../../../dto/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: ProductModel | undefined

  //TODO sa fac sa primesc o lista de produse
  url: any

  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
    this.product = this.service.getProductByCode("1")
    console.log(this.product)
    this.url = "/products/p/" + this.product?.id;
    console.log(this.url)

  }

}
