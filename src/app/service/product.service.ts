import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../dto/product.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable(
  {providedIn: 'root'}
)
export class ProductService {
  defaultProduct: ProductModel = {
    name: '',
    description: '',
    expirationDate: '',
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
  products: ProductModel[] = [];
  product = this.defaultProduct
  product$: Observable<ProductModel> | undefined
  retrievedImage: any;
  private retrieveResponse: any;
  private base64Data: any;

  constructor(private http: HttpClient) {
  }

  addProduct(uploadImageData: FormData | undefined) {
    this.http.post('http://localhost:8080/products/add', uploadImageData, {observe: 'response'})
      .subscribe((response) => {
        }
      );
  }

  // getProducts(pageSize: number, pageNumber: number, sortBy: string, sortDir: string): ProductModel[] {
  //   let url = "http://localhost:8080/products?pageSize=" + pageSize + "&pageNo=" + pageNumber + "&sortBy=" + sortBy + "&sortDir=" + sortDir
  //
  //   this.http.get<ProductModel[]>(url).subscribe(res => {
  //     for (let i = 0; i < res.length; i++) {
  //       this.retrieveResponse = res[i];
  //       this.base64Data = this.retrieveResponse.mediaUrl.data;
  //       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       res[i].mediaUrl = this.retrievedImage
  //     }
  //     this.products = res
  //   })
  //   return this.products;
  // }
  getProducts(pageSize: number, pageNumber: number, sortBy: string, sortDir: string): Observable<ProductModel[]> {
    let url = "http://localhost:8080/products?pageSize=" + pageSize + "&pageNo=" + pageNumber + "&sortBy=" + sortBy + "&sortDir=" + sortDir
    return this.http.get<ProductModel[]>(url);
  }

  //todo refactor to move logic to component
  getProductByCode(code: string): ProductModel | undefined {

    this.http.get<ProductModel>('http://localhost:8080/products/' + code)
      .subscribe(
        res => {
          this.retrieveResponse = res;
          this.base64Data = this.retrieveResponse.mediaUrl.data;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.product.media.url = this.retrievedImage
          this.product.name = this.retrieveResponse.name
          this.product.price = this.retrieveResponse.price;
          this.product.description = this.retrieveResponse.description
          this.product.expirationDate = this.retrieveResponse.expirationDate;
          this.product.id = this.retrieveResponse.id;
        }
      );
    return this.product;

  }

}
