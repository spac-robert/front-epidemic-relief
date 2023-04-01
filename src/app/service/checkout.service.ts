import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OrderDetails} from "../dto/product.model";

@Injectable(
  {providedIn: 'root'}
)
export class CheckoutService {

  constructor(private http: HttpClient) {
  }

  sendOrder(order: OrderDetails) {
    let headerOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post<any>('http://localhost:8080/order', order, headerOption).subscribe(
      response => {
        console.log(response); // handle successful response here
      },
      error => {
        console.log(error); // handle error response here
      }
    );
  }

}
