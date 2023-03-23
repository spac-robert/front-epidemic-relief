import {Component} from '@angular/core';
import {OrderDetails} from "../dto/product.model";
import {CheckoutService} from "../service/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  order: OrderDetails = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    card: {
      cardName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      ccv: "",
    }
  }

  //TODO sa vad dc nu am nimic pe this.order de ce nu mi le ia din acel form
  constructor(private checkoutService: CheckoutService) {
  }

  submitForm() {
    this.checkoutService.sendOrder(this.order);
  }
}
