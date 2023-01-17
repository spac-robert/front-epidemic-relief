import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from "./component/banner.component";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";
import {CarouselModule} from "@coreui/angular";


@NgModule({
  declarations: [BannerComponent],
  exports: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    NgbCarousel,
    NgbSlide,
    RouterLink,
    CarouselModule
  ]
})
export class BannerModule { }
