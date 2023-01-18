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

  product: ProductModel = {
    name: '',
    description: '',
    expirationDate: '',
    manufacturer: '',
    price: 0,
    media: {
      uploadImageData: null,
      mime: '',
      url: '',
    }
  }
  retrievedImage: any;
  private retrieveResponse: any;
  private base64Data: any;

  constructor(private service: ProductService, private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get('http://localhost:8080/products/1')
      .subscribe(
        res => {
          this.retrieveResponse = res;
          console.log(res)
          this.base64Data = this.retrieveResponse.mediaUrl.data;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.product.media.url = this.retrievedImage
          this.product.name = this.retrieveResponse.name
          this.product.price = this.retrieveResponse.price;
          this.product.description = this.retrieveResponse.description
          this.product.expirationDate = this.retrieveResponse.expirationDate;
        }
      );
  }

}
