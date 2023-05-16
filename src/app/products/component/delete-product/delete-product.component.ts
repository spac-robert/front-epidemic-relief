import {Component} from '@angular/core';
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {
  productList: ProductModel[] = [];
  productToDelete: ProductModel = {
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
  formValid: boolean = true;
  uploadImageData?: FormData;

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
      this.productToDelete = this.service.getProductByCode(selectedProduct.id);
    }
  }

  submitForm() {
    this.service.deleteProduct(this.productToDelete.id);
  }

  isEmpty() {
    return (
      this.productToDelete.name === '' &&
      this.productToDelete.stock === 0 &&
      this.productToDelete.description === '' &&
      this.productToDelete.manufacturer === '' &&
      this.productToDelete.price === 0
    );
  }
}
