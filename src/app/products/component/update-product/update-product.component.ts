import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productList: ProductModel[] = [];
  productUpdate: ProductModel = {
    name: '',
    stock: 0,
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
  formValid: boolean = true;
  selectedFile!: File;
  retrievedImage: any;
  uploadImageData?: FormData;
  isSubmitted = false;
  errorMessage: string = "";

  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
    this.uploadImageData = new FormData();
    this.fetchProducts();
  }

  fetchProducts() {
    this.service.getAllProducts().subscribe(
      (products: ProductModel[]) => {
        this.productList = products;
        console.log(this.productList);
      },
      (error) => {
        console.error('Failed to fetch products:', error);
        this.productList = [];
      }
    );
  }

  onSelectProduct(productName: string) {
    const selectedProduct = this.productList.find(product => product.name === productName);
    if (selectedProduct && selectedProduct.id) {
      this.productUpdate = this.service.getProductByCode(selectedProduct.id);
    }
    this.uploadImageData?.append('media', this.productUpdate.mediaUrl.data)
    console.log(this.productUpdate);
  }

  isFormValid(): boolean {
    return (
      this.productUpdate.description !== null &&
      this.productUpdate.name !== null &&
      this.productUpdate.manufacturer !== null &&
      this.productUpdate.price >= 0
    );
  }

  submitForm() {
    this.formValid = this.isFormValid();
    if (this.isFormValid()) {
      if (this.productUpdate.id) {
        this.uploadImageData?.append('id', this.productUpdate.id);
      }
      this.uploadImageData?.append('description', this.productUpdate.description);
      this.uploadImageData?.append('name', this.productUpdate.name);
      this.uploadImageData?.append('price', this.productUpdate.price.toString());
      this.uploadImageData?.append('manufacturer', this.productUpdate.manufacturer);

      this.service.updateProduct(this.uploadImageData)
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      this.errorMessage = "Please make sure the quantity is greater than 0 and the expiration date is in the future.";
    }
  }

  protected readonly name = name;

  public onFileChanged({event}: { event: any }) {
    this.selectedFile = event.target.files[0];
    this.uploadImageData = new FormData();
    this.uploadImageData.append('media', this.selectedFile, this.selectedFile.name);

    this.productUpdate.media.mime = this.selectedFile.type
  }

}
