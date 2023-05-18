import {NgModule} from "@angular/core";
import {HomepageComponent} from "../homepage/component/homepage.component";
import {CommonModule} from "@angular/common";
import {BannerModule} from "../banner/banner.module";
import {FooterModule} from "../footer/footer.module";
import {SubscriptionButtonComponent} from "./subscription-button.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [SubscriptionButtonComponent],
  exports: [
    SubscriptionButtonComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
  ]
})
export class SubscriptionButtonModule {
}
