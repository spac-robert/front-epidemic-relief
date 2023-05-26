import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: ProductModel = {
    name: '',
    stock: 0,
    description: '',
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

  selectedFile!: File | undefined;
  retrievedImage: any;
  uploadImageData?: FormData;
  formValid: boolean = true;
  isSubmitted = false;
  errorMessage: string = "";

  constructor(private service: ProductService, private router: Router) {
  }

  ngOnInit(): void {

  }

  public onFileChanged({event}: { event: any }) {
    this.selectedFile = event.target.files[0];
    this.uploadImageData = new FormData();
    if (this.selectedFile) {
      this.uploadImageData.append('media', this.selectedFile, this.selectedFile.name);

      this.product.media.mime = this.selectedFile.type
    }
  }

  submitForm() {
    this.formValid = this.isFormValid();
    if (this.isFormValid()) {
      this.uploadImageData?.append('description', this.product.description);
      this.uploadImageData?.append('name', this.product.name);
      this.uploadImageData?.append('price', this.product.price.toString());
      this.uploadImageData?.append('manufacturer', this.product.manufacturer);

      this.service.addProduct(this.uploadImageData).subscribe((response) => {
        if (response.ok) {
          this.isModalOpen = true;
          if (response.body) {
            this.textToDisplay = response.body.message;
            this.setDefaultValue();
            //TODO sa se dea refresh la pagina
            this.router.navigate(['/product/add']);
          }
        }
      }, (error) => {
        console.log(error)
      })
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      this.errorMessage = "Please make sure the quantity is greater than 0 and the expiration date is in the future.";
    }
  }

  private setDefaultValue() {
    this.selectedFile = undefined;
    this.product = {
      name: '',
      stock: 0,
      description: '',
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
  }

  isFormValid(): boolean {
    return !!this.product.name && !!this.product.manufacturer && !!this.product.price && !!this.product.description;
  }

  isModalOpen = false;
  textToDisplay = 'This is the text to display in the modal.';

  onModalOpenChange(updatedValue: boolean) {
    this.isModalOpen = updatedValue;
  }
}
