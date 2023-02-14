import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./component/homepage.component";
import {BannerModule} from "../banner/banner.module";


@NgModule({
  declarations: [HomepageComponent],
  exports: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    BannerModule,
  ]
})
export class HomepageModule { }
