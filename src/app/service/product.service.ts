import {HttpClient} from "@angular/common/http";
import {Page, ProductModel} from "../dto/product.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

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
    image: "",
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

  getProducts(pageSize: number, pageNumber: number, sortBy: string, sortDir: string): Observable<Page<ProductModel>> {
    let url = "http://localhost:8080/products?pageSize=" + pageSize + "&pageNo=" + pageNumber + "&sortBy=" + sortBy + "&sortDir=" + sortDir
    return this.http.get<Page<ProductModel>>(url);
  }

  getAllProducts(): Observable<ProductModel[]> {
    let url = "http://localhost:8080/products/all";
    return this.http.get<ProductModel[]>(url);
  }

  //todo refactor to move logic to component
  getProductByCode(code: string): ProductModel {

    this.http.get<ProductModel>('http://localhost:8080/products/' + code)
      .subscribe(
        res => {
          this.retrieveResponse = res;
          this.base64Data = this.retrieveResponse.mediaUrl.data;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          this.product.media.url = this.retrievedImage;
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

  addLot(lotData: FormData) {
    lotData.forEach((value, key) => {
      console.log(key + ': ' + value);
    });
    this.http.post('http://localhost:8080/products/add/lot', lotData).subscribe(data => {
      console.log(data);
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

  updateProduct(productUpdate: FormData | undefined) {
    let url = "http://localhost:8080/products/update";
    this.http.put(url, productUpdate, {observe: 'response'})
      .subscribe((response) => {
        }
      );
  }

  deleteProduct(id: string | undefined) {
    let url = `http://localhost:8080/products/delete/${id}`;
    this.http.delete(url).subscribe(
      () => {
        // Handle successful deletion, e.g., show a success message or update the product list
      },
      (error) => {
        // Handle error, e.g., show an error message
      }
    );
  }
}
