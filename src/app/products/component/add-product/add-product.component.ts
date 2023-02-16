import {Component, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: ProductModel = {
    name: '',
    // stock: 0,
    description: '',
    // expirationDate: '',
    manufacturer: '',
    price: 0,
    media: {
      uploadImageData: null,
      mime: '',
      url: '',
    },
    mediaUrl: {
      name: '',
      id: 0,
      data: new Blob()
    },
    image: ""
  }

  selectedFile!: File;
  retrievedImage: any;
  uploadImageData?: FormData;


  constructor(private service: ProductService, private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  public onFileChanged({event}: { event: any }) {
    this.selectedFile = event.target.files[0];
    this.uploadImageData = new FormData();
    this.uploadImageData.append('media', this.selectedFile, this.selectedFile.name);

    this.product.media.mime = this.selectedFile.type
  }

  submitForm() {
    this.uploadImageData?.append('description', this.product.description);
    this.uploadImageData?.append('name', this.product.name);
    this.uploadImageData?.append('price', this.product.price.toString());
    //this.uploadImageData?.append('stock', this.product.stock.toString());
    this.uploadImageData?.append('manufacturer', this.product.manufacturer);
   // this.uploadImageData?.append('expirationDate', this.product.expirationDate);

    this.service.addProduct(this.uploadImageData)
  }

}
