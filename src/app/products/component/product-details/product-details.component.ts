import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel | undefined

  constructor(private service: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get('code');
    console.log(code)
    if (code != null) {
      this.product = this.service.getProductByCode(code);
    }
  }
}
