import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Page, ProductModel, Subscription} from "../dto/product.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LotResponse, SaveObjectResponse} from "../dto/auth.model";

@Injectable(
  {providedIn: 'root'}
)
export class ProductService {
  defaultProduct: ProductModel = {
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
  products: ProductModel[] = [];
  product = this.defaultProduct
  retrievedImage: any;
  private retrieveResponse: any;
  private base64Data: any;

  constructor(private http: HttpClient) {
  }

  addProduct(uploadImageData: FormData | undefined): Observable<HttpResponse<SaveObjectResponse>> {
    return this.http.post<SaveObjectResponse>('http://localhost:8080/products/add', uploadImageData, {observe: 'response'});
  }

  getProducts(pageSize: number, pageNumber: number, sortBy: string, sortDir: string): Observable<Page<ProductModel>> {
    let url = "http://localhost:8080/products?pageSize=" + pageSize + "&pageNo=" + pageNumber + "&sortBy=" + sortBy + "&sortDir=" + sortDir
    return this.http.get<Page<ProductModel>>(url);
  }

  getAllProducts(): Observable<ProductModel[]> {
    let url = "http://localhost:8080/products/all";
    return this.http.get<ProductModel[]>(url);
  }

  getProductByCode(code: string): ProductModel {

    this.http.get<ProductModel>('http://localhost:8080/products/' + code)
      .subscribe(
        res => {
          this.retrieveResponse = res;
          console.log(res)
          if (this.retrieveResponse.mediaUrl != null) {
            this.base64Data = this.retrieveResponse.mediaUrl.data;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            this.product.media.url = this.retrievedImage;
          }
          this.product.name = this.retrieveResponse.name;
          this.product.price = this.retrieveResponse.price;
          this.product.description = this.retrieveResponse.description;
          this.product.stock = this.retrieveResponse.stock;
          this.product.manufacturer = this.retrieveResponse.manufacturer;
          // this.product.expirationDate = this.retrieveResponse.expirationDate;
          this.product.id = this.retrieveResponse.id;
        }
      );
    return this.product;

  }

  // addLot(lotData: FormData) {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`,
  //     observe: 'response'
  //   });
  //   lotData.forEach((value, key) => {
  //     console.log(key + ': ' + value);
  //   });
  //   return this.http.post('http://localhost:8080/products/add/lot', lotData, {headers});
  // }

  addLot(lotData: FormData): Observable<HttpResponse<SaveObjectResponse>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.post<SaveObjectResponse>('http://localhost:8080/products/add/lot', lotData, {
      headers,
      observe: 'response'
    });
  }

  searchAllProducts(searchQuery: string) {
    const params = {query: searchQuery};
    let url = "http://localhost:8080/products/search";
    return this.http.get<ProductModel[]>(url, {params: params});
  }

  searchProducts(searchQuery: string, sortBy: string, sortDir: string, pageSize: number, pageNumber: number): Observable<Page<ProductModel>> {
    let url = "http://localhost:8080/products?pageSize=" + pageSize + "&pageNo=" + pageNumber + "&sortBy=" + sortBy + "&sortDir=" + sortDir;
    if (searchQuery && searchQuery.trim() !== '') {
      url += "&searchQuery=" + encodeURIComponent(searchQuery);
    }
    return this.http.get<Page<ProductModel>>(url);
  }

  // updateProduct(productUpdate: FormData | undefined) {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   const url = 'http://localhost:8080/products/update';
  //
  //   this.http.put(url, productUpdate, {headers})
  //     .subscribe(
  //       () => {
  //         // Handle success response
  //       },
  //       (error) => {
  //         // Handle error response
  //       }
  //     );
  // }

  updateProduct(productUpdate: FormData | undefined): Observable<HttpResponse<SaveObjectResponse>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.put<SaveObjectResponse>('http://localhost:8080/products/update', productUpdate, {
      headers,
      observe: 'response'
    });
  }

  deleteProduct(id: string | undefined): Observable<HttpResponse<string>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    let url = `http://localhost:8080/products/delete/${id}`;
    return this.http.delete(url, {headers, observe: 'response', responseType: 'text'});
  }

  subscribe(subscription: Subscription) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    let url = "http://localhost:8080/package/subscription";
    this.http.post(url, subscription, {headers}).subscribe(
      response => {
        console.log(response); // handle successful response here
      },
      error => {
        console.log(error); // handle error response here
      });
  }
}
