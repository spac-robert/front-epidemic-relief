import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OrderDetails} from "../dto/product.model";
import {Household} from "../dto/auth.model";

@Injectable(
  {providedIn: 'root'}
)
export class HouseholdService {

  constructor(private http: HttpClient) {
  }

  updateHousehold(household: Household) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.http.put<any>('http://localhost:8080/account/profile/household/update', household, {headers}).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
