import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../dto/product.model";
import {Injectable} from "@angular/core";

@Injectable(
  {providedIn: 'root'}
)
export class ProductService {
  products: ProductModel[] | undefined;


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

}
