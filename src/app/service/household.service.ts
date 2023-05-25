import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {OrderDetails} from "../dto/product.model";
import {Household, HouseholdResponse} from "../dto/auth.model";
import {Observable} from "rxjs";

@Injectable(
  {providedIn: 'root'}
)
export class HouseholdService {

  constructor(private http: HttpClient) {
  }

  updateHousehold(household: Household): Observable<HttpResponse<HouseholdResponse>> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<HttpResponse<HouseholdResponse>>('http://localhost:8080/account/profile/household/update', household, {headers});
  }

}
