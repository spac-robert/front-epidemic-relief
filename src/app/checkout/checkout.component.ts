import {Component, OnInit} from '@angular/core';
import {OrderDetails} from "../dto/product.model";
import {CheckoutService} from "../service/checkout.service";

import * as L from 'leaflet';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit  {

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
    // card: {
    //   cardName: "",
    //   cardNumber: "",
    //   expMonth: "",
    //   expYear: "",
    //   ccv: "",
    // }
  }

  //TODO sa vad dc nu am nimic pe this.order de ce nu mi le ia din acel form
  constructor(private checkoutService: CheckoutService) {
  }

  submitForm() {
    this.checkoutService.sendOrder(this.order);
  }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView([coords.latitude, coords.longitude], 15);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);

      let marker = L.marker([coords.latitude, coords.longitude]).addTo(mymap);
      marker.bindPopup('<b>Hi</b>').openPopup();

    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 0,
        maximumAge: 0,
      }
    );
  }
}
