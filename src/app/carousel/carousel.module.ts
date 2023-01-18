import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCarouselComponent} from "./product-carousel/product-carousel.component";


@NgModule({
  declarations: [ProductCarouselComponent],
  exports: [
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductCarouselModule { }
