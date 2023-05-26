import {Component} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Subscription} from "../dto/product.model";
import {Router} from "@angular/router";
import {Account} from "../dto/auth.model";

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent {
  // @ts-ignore
  user: Account | undefined = JSON.parse(localStorage.getItem('user'));

  subscription: Subscription = {
    userId: this.user?.id,
    date: ""
  }
  currentDate: Date = new Date();
  isDateSelectedValid: boolean = true;

  constructor(private service: ProductService, private router: Router) {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('user'));
    this.subscription.userId = this.user?.id
  }

  //TODO    Acest mesaj trebuie sa se autogenereze, o sa fie primit de pe back
  //     <li>2 liters of water per day for each family member.</li>
  //     <li>A chocolate and an orange juice for each child.</li>
  //     <li>Vegan canned products for vegan family members.</li>
  //     <li>Meat products for non-vegan family members.</li>
  subscribe() {
    if (this.subscription.date) {
      this.service.subscribe(this.subscription);
      this.router.navigate(['/'])
    } else {
      this.isDateSelectedValid = false;
      setTimeout(() => {
        this.isDateSelectedValid = true;
      }, 5000);
    }
  }

  isFormValid(): boolean {
    const nextDelivery = new Date(this.subscription.date);

    return nextDelivery > this.currentDate;
  }
  getNextDayDate(): string {
    const nextDay = new Date(this.currentDate.getTime() + 24 * 60 * 60 * 1000); // Adding 24 hours in milliseconds
    return nextDay.toISOString().split('T')[0];
  }
}
