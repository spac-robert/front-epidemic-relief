import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel | undefined
  stock: number = 0;

  constructor(private service: ProductService, private route: ActivatedRoute) {
  }

  //TODO de facut pagina de brand details
  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get('code');
    if (code != null) {
      this.product = this.service.getProductByCode(code);
    }
  }

  incrementStock() {
    //TODO validare sa nu depaseasca mai mult de stock-ul produsului
    this.stock++;
  }

  decrementStock() {
    if (this.stock > 0) {
      this.stock--;
    }
  }

  addToCart() {

  }
}
