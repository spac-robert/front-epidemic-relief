import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProductComponent} from './component/add-product/add-product.component';
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from "./component/product/products.component";
import {RouterLink} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgxPaginationModule
  ]
})
export class ProductModule {
}
