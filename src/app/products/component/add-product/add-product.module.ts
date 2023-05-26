import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AddProductComponent} from "./add-product.component";
import {HttpClientModule} from "@angular/common/http";
import {PopUpComponent} from "../../../pop-up/pop-up.component";


@NgModule({
  declarations: [
    AddProductComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AddProductModule {
}
