import {Component} from '@angular/core';
import {GoogleAuthService} from "../../service/google.auth.service";
import {HttpClient} from "@angular/common/http";

declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private clientId = '661006053014-88kfc49agv34mn239o27r7d86l7k45ah.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ].join(' ');

  // signInWithGoogle(): void {
  //   const auth2 = gapi.auth2.getAuthInstance();
  //   auth2.signIn({prompt: 'consent'}).then((googleUser: any) => {
  //     console.log(googleUser);
  //     this.oauth2Service.sendGoogleUserToBack(googleUser);
  //   }).catch((error: any) => {
  //     if (error.error === 'popup_closed_by_user') {
  //       // Handle popup window closing event
  //       console.log('Authentication popup window was closed by user.');
  //     } else {
  //       console.error(error);
  //     }
  //   });
  // }
  //
  // ngOnInit(): void {
  //   gapi.load('auth2', () => {
  //     gapi.auth2.init({
  //       client_id: this.clientId,
  //       scope: this.scope
  //     });
  //   });
  // }

  constructor(private http: HttpClient ,private oauth2Service: GoogleAuthService) {}

  // async signInWithGoogle(): Promise<void> {
  //   // Load the Google API client library
  //   await gapi.load('auth2', async () => {
  //     // Initialize the Google API client with your client ID and scope
  //     const auth2 = await gapi.auth2.init({
  //       client_id: 'YOUR_CLIENT_ID',
  //       scope: 'email profile',
  //     });
  //
  //     // Sign in the user
  //     const googleUser = await auth2.signIn({ prompt: 'select_account' });
  //
  //     // Get the user's ID token
  //     const idToken = googleUser.getAuthResponse().id_token;
  //
  //     // Create a new Google OAuth2 client
  //     const client = new OAuth2Client('YOUR_CLIENT_ID');
  //
  //     // Verify the ID token with the Google OAuth2 client
  //     const ticket = await client.verifyIdToken({
  //       idToken: idToken,
  //       audience: 'YOUR_CLIENT_ID',
  //     });
  //
  //     // Get the user's email address and name
  //     const payload = ticket.getPayload();
  //     // @ts-ignore
  //     const email = payload.email;
  //     // @ts-ignore
  //     const name = payload.name;
  //
  //     // Send the user details to the backend
  //     const body = {
  //       email: email,
  //       name: name,
  //     };
  //     const url = 'BACKEND_URL'; // Replace with your backend API URL
  //     this.http.post(url, body).subscribe(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   });
  // }

}
