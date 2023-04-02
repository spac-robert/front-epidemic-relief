import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {LoginComponent} from "./component/login.component";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ]
})
export class LoginModule {
}
