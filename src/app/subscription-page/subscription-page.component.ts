import {Component} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Subscription} from "../dto/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent {

  //TODO aici e Mocked id user
  subscription: Subscription = {
    userId: 1,
    date: ""
  }
  currentDate: Date = new Date();
  isDateSelectedValid: boolean = true;

  constructor(private service: ProductService, private router: Router) {
  }

  //TODO    Acest mesaj trebuie sa se autogenereze, o sa fie primit de pe back
  //     <li>2 liters of water per day for each family member.</li>
  //     <li>A chocolate and an orange juice for each child.</li>
  //     <li>Vegan canned products for vegan family members.</li>
  //     <li>Meat products for non-vegan family members.</li>
  subscribe() {
    if (this.subscription.date) {
      //TODO aici am sa primesc unserul authentificat si lui am sa ii trimit id-ul catre back sa se aboneze
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


}
