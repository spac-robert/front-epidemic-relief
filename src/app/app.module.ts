import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageModule} from "./homepage/homepage.module";
import {HeaderModule} from "./header/header.module";
import {ProductModule} from "./products/product.module";
import {AddProductModule} from "./products/component/add-product/add-product.module";
import {ProductDetailsComponent} from './products/component/product-details/product-details.component';
import {StoreModule} from "@ngrx/store";
import {CartComponent} from './cart/cart.component';
import {OrderComponent} from './order/order.component';
import {FormsModule} from "@angular/forms";
import {CheckoutModule} from "./checkout/checkout.module";
import {FooterModule} from "./footer/footer.module";
import {SubscriptionPageComponent} from "./subscription-page/subscription-page.component";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    CartComponent,
    OrderComponent,
    SubscriptionPageComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    HeaderModule,
    ProductModule,
    AddProductModule,
    CheckoutModule,
    //TODO aici nu stiu daca trebuie sa fac asa
    //StoreModule.forRoot({products:productReducer})
    StoreModule.forRoot({}),
    FormsModule,
    FooterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
