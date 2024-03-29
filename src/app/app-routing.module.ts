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
import {DeleteProductComponent} from "./products/component/delete-product/delete-product.component";
import {SubscriptionPageComponent} from "./subscription-page/subscription-page.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {RegisterComponent} from "./register/register.component";
import {AuthenticationGuardGuard} from "./login.guard";
import {CheckRoleGuard} from "./check-role.guard";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'product/add', component: AddProductComponent, canActivate: [CheckRoleGuard]},
  {path: 'products', component: ProductsComponent},
  {path: 'products/p/:code', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/add/lot', component: AddLotComponent,canActivate: [CheckRoleGuard]},
  {path: 'cart/checkout', component: CheckoutComponent},
  {path: 'cart/checkout/acknowledgment', component: AcknowledgmentComponent},
  {path: 'product/update', component: UpdateProductComponent,canActivate: [CheckRoleGuard]},
  {path: 'product/delete', component: DeleteProductComponent},
  {path: 'subscription', component: SubscriptionPageComponent, canActivate: [AuthenticationGuardGuard]},
  {path: 'auth/login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuardGuard]},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
