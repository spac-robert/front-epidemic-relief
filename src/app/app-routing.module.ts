import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/component/homepage.component";
import {ProductsComponent} from "./products/component/product/products.component";
import {AddProductComponent} from "./products/component/add-product/add-product.component";
import {ProductDetailsComponent} from "./products/component/product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/p/:code', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
