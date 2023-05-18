import {Component} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent {
  constructor(private service: ProductService) {
  }



  //TODO    Acest mesaj trebuie sa se autogenereze, o sa fie primit de pe back
  //     <li>2 liters of water per day for each family member.</li>
  //     <li>A chocolate and an orange juice for each child.</li>
  //     <li>Vegan canned products for vegan family members.</li>
  //     <li>Meat products for non-vegan family members.</li>
  subscribe() {
    //TODO aici am sa primesc unserul authentificat si lui am sa ii trimit id-ul catre back sa se aboneze

  }
}
