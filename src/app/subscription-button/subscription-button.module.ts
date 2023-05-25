import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
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
