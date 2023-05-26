import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  @Input() modalText: string | undefined;
  @Input() isModalOpen: boolean | undefined;
  @Output() isModalOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  closePopup() {
    this.isModalOpen = false;
    this.isModalOpenChange.emit(this.isModalOpen);
  }
}
