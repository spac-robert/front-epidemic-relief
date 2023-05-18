import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-subscription-button',
  templateUrl: './subscription-button.component.html',
  styleUrls: ['./subscription-button.component.scss'],
  animations: [
    trigger('buttonState', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('enlarged', style({
        transform: 'scale(1.2)'
      })),
      transition('normal <=> enlarged', animate('200ms ease-in-out'))
    ])
  ]
})
export class SubscriptionButtonComponent implements OnInit {
  buttonState = 'normal';
  subscriptionUrl = '/subscription';

  constructor() {
  }

  ngOnInit() {
  }

  toggleButtonState() {
    this.buttonState = this.buttonState === 'normal' ? 'enlarged' : 'normal';
  }
}
