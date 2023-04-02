import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable(
  {providedIn: 'root'}
)
export class GoogleAuthService {

  constructor(private http: HttpClient) {
  }

  sendGoogleUserToBack(googleUser:any){
    const url = 'http://localhost:8080/oauth2/callback/google';
    const body = { googleUser };

    this.http.post(url, body).subscribe(
      response => {
        console.log(response); // Handle the response from the backend
      },
      error => {
        console.log(error); // Handle any errors that occur
      }
    );
  }
}
