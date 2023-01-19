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

  //TODO sa fac sa primesc o lista de produse
  url: any

  constructor(private service: ProductService) {
  }

  //TODO incerc sa imi returneze undefined ca in *ngIf sa nu imi mai faca display daca nu am produs
  ngOnInit(): void {
    this.product = this.service.getProductByCode("1")
    this.url = "/products/p/" + this.product?.id;

  }

}
