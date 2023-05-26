import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  @Input() modalText: string | undefined;
  @Input() isModalOpen: boolean | undefined;

  closePopup() {
    this.isModalOpen = false;
  }
}
