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
  formValid: boolean = true;
  isSubmitted = false;
  errorMessage: string = "";

//TODO dupa ce dau submit si totul este ok, sa imi apara un pop-up ca produsul a fosta daugat cu succes,
  constructor(private service: ProductService) {
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
    this.formValid = this.isFormValid();
    if (this.isFormValid()) {
      this.uploadImageData?.append('description', this.product.description);
      this.uploadImageData?.append('name', this.product.name);
      this.uploadImageData?.append('price', this.product.price.toString());
      this.uploadImageData?.append('manufacturer', this.product.manufacturer);

      this.service.addProduct(this.uploadImageData)
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      this.errorMessage = "Please make sure the quantity is greater than 0 and the expiration date is in the future.";
    }
  }

  isFormValid(): boolean {
    return !!this.product.name && !!this.product.manufacturer && !!this.product.price && !!this.product.description;
  }
}
