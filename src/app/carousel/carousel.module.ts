import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCarouselComponent} from "./product-carousel/product-carousel.component";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {IvyCarouselModule} from "angular-responsive-carousel";



@NgModule({
  declarations: [ProductCarouselComponent],
  exports: [
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    NgbCarousel,
    NgbSlide,
    IvyCarouselModule
  ]
})
export class CarouselModule { }
