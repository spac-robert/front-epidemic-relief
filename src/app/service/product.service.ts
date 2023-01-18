import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../dto/product.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable(
  {providedIn: 'root'}
)
export class ProductService {
  products: ProductModel[] | undefined;
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

  // getProducts(pageSize: string, pageNumber: string, sortBy: string, sortDir: string): Observable<ProductModel[]> {
  //   let url = "http://localhost:8080/products?pageSize=" + pageSize + "&pageNo=" + pageNumber + "&sortBy=" + sortBy + "&sortDir=" + sortDir
  //   // const imageUrl = URL.createObjectURL(response)
  //
  //   let x = this.http.get<ProductModel[]>(url).subscribe((prod: ProductModel[]) => {
  //     this.products = prod;
  //     this.products.forEach((product: ProductModel) => {
  //       product.mediaUrl = URL.createObjectURL(product.media)
  //     })
  //   })
  //
  //   return this.http.get<ProductModel[]>(url)
  // }

  getProductByCode(code: string): ProductModel {

    this.http.get<ProductModel>('http://localhost:8080/products/' + code)
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
          this.product.id = this.retrieveResponse.id;
        }
      );

    return this.product;
  }
}
