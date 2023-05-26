import {Component} from '@angular/core';
import {Account, Household, HouseholdResponse} from "../dto/auth.model";
import {HouseholdService} from "../service/household.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: Account;
  errorMessage: string = "";

  constructor(private account: HouseholdService, private router: Router) {
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
          this.router.navigateByUrl("/profile");
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

  validateNumber(numb: number) {
    if (numb < 0) {
      numb = 0;
    }
    return numb;
  }

  validateNumberOfPeople() {
    if (this.user.household.numberOfPeople < 1) {
      this.user.household.numberOfPeople = 1;
    }
  }

  validateNumberOfChildren() {
    this.user.household.numberOfChildren = this.validateNumber(this.user.household.numberOfChildren);
  }

  validateNumberOfVegans() {
    this.user.household.numberOfVegans = this.validateNumber(this.user.household.numberOfVegans);
  }

  validateNumberOfNonVegans() {
    this.user.household.numberOfNonVegans = this.validateNumber(this.user.household.numberOfNonVegans);

  }
}
