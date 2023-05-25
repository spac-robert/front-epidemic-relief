import {Component} from '@angular/core';
import {Account, Household} from "../dto/auth.model";
import {HouseholdService} from "../service/household.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: Account;

  constructor(private account: HouseholdService) {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user)
  }


  updateHousehold(household: Household) {
    this.account.updateHousehold(household)
  }

  updateAccount(household: Household) {
    this.account.updateHousehold(household)
  }
}
