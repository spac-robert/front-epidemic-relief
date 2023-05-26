import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from "./component/product/products.component";
import {RouterLink} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {AddLotComponent} from './component/add-lot/add-lot.component';
import {UpdateProductComponent} from "./component/update-product/update-product.component";
import {DeleteProductComponent} from "./component/delete-product/delete-product.component";
import {TruncateComponent} from "../utils/truncate/truncate.component";


@NgModule({
  declarations: [
    ProductsComponent,
    AddLotComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    TruncateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgxPaginationModule,
  ]
})
export class ProductModule {
}
