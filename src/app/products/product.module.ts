import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from "./component/product/products.component";
import {RouterLink} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "../store/effects/product.effects";
import {productReducer} from "../store/reducer/product.reducer";


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgxPaginationModule,
    //StoreModule.forRoot(productReducer),
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot(
      {
        products: productReducer,
      },
      {}
    ),
  ]
})
export class ProductModule {
}
