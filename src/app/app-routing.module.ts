import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./homepage/component/homepage.component";
import {ProductsComponent} from "./products/component/product/products.component";
import {AddProductComponent} from "./products/component/add-product/add-product.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
