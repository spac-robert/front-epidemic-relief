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

  constructor(private service: ProductService, private route: ActivatedRoute) {
  }

  //TODO de facut pagina de brand details
  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get('code');
    if (code != null) {
      this.product = this.service.getProductByCode(code);
    }
  }
}
