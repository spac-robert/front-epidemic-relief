import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AddProductComponent} from "./add-product.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AddProductModule {
}
