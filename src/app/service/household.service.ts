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

  updateHousehold(household:Household){
    let headerOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post<any>('http://localhost:8080/account/update', household, headerOption).subscribe(
      response => {
        console.log(response); // handle successful response here
      },
      error => {
        console.log(error); // handle error response here
      }
    );
  }

}
