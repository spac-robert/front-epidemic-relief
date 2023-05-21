import {Component} from '@angular/core';
import {Register} from "../dto/auth.model";

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

  submitRegisterForm() {

  }
}
