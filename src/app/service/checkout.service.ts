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
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('http://localhost:8080/order', order, {headers});
  }
}
