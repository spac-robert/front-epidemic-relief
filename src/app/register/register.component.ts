import {Component} from '@angular/core';
import {Register} from "../dto/auth.model";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

class RegisterResponse {
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginUrl: string = "/auth/login";
  register: Register = {
    email: "",
    username: "",
    password: ""
  }
  errorMessages: string[] = [];

  constructor(private authService: AuthService, private router: Router) {
  }

  submitRegisterForm() {
    this.errorMessages = [];
    this.authService.register(this.register)
      .subscribe(
        (response) => {
          if (response.ok) {
            this.router.navigateByUrl("auth/login");
          } else {
            // Bad request, display the error message
            console.log('Bad request:', response.body);
            // Display the error message in your HTML template
            // Example: this.errorMessage = response.body;
          }
        },
        (error) => {
          console.error('Error:', error);
          this.errorMessages = error.error.message;
          setTimeout(() => {
            this.errorMessages = [];
          }, 5000);
        }
      );
  }

}
