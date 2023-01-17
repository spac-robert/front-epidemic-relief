import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/component/homepage.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  //{path: 'product/add', component: AddProductComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
