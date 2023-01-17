import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  //@Input()
  public images = ["assets/image/homepage.jpg", "assets/image/covid19.jpg", "assets/image/epidemic-in-action.jpeg"]
  // images = [
  //   {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
  //   {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
  //   {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
  //   {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
  //   {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
  //   {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
  // ];
  responsiveOptions;

  constructor() {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
    }];
  }

  ngOnInit(): void {

  }
}
