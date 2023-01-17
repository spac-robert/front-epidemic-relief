import {Component} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent {
  images = [
    {title: 'First Slide', desc: 'First Slide Description', src: "https://picsum.photos/id/102/900/500"},
    {title: 'Second Slide', desc: 'Second Slide Description', src: "https://picsum.photos/id/1020/900/500"},
    {title: 'Third Slide', desc: 'Third Slide Description', src: "https://picsum.photos/id/1024/900/500"}
  ];
}
