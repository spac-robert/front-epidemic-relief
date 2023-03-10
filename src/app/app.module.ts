import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageModule} from "./homepage/homepage.module";
import {HeaderModule} from "./header/header.module";
import {ProductModule} from "./products/product.module";
import {AddProductModule} from "./products/component/add-product/add-product.moddule";
import { ProductDetailsComponent } from './products/component/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    HeaderModule,
    ProductModule,
    AddProductModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
