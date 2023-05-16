import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/component/homepage.component";
import {ProductsComponent} from "./products/component/product/products.component";
import {AddProductComponent} from "./products/component/add-product/add-product.component";
import {ProductDetailsComponent} from "./products/component/product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {AddLotComponent} from "./products/component/add-lot/add-lot.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {AcknowledgmentComponent} from "./acknowledgment/component/acknowledgment.component";
import {UpdateProductComponent} from "./products/component/update-product/update-product.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/p/:code', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/add/lot', component: AddLotComponent},
  {path: 'cart/checkout', component: CheckoutComponent},
  {path: 'cart/checkout/acknowledgment', component: AcknowledgmentComponent},
  {path: 'product/update', component: UpdateProductComponent},
  //{path: 'products/update/lot', component: AcknowledgmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
