import {Component} from '@angular/core';
import {Account, Household, HouseholdResponse} from "../dto/auth.model";
import {HouseholdService} from "../service/household.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: Account;
  errorMessage: string = "";

  constructor(private account: HouseholdService) {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user)
  }


  updateHousehold(household: Household) {
    this.account.updateHousehold(household).subscribe((response: HouseholdResponse) => {
      console.log("ACCOUNT: " + response)
      if (response.error == null) {
        if (response.household) {
          this.user.household = response.household;
          localStorage.removeItem('user');
          localStorage.setItem('user', JSON.stringify(this.user));
        }
      }
    }, (error) => {
      console.error('Error:', error);
      this.errorMessage = error.error.message;
      setTimeout(() => {
        this.errorMessage = "";
      }, 5000);
    })
  }
}
