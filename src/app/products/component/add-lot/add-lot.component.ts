import {Component, OnInit} from '@angular/core';
import {Lot} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";
import {generateLotId} from "../../../utils/utils";

@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.scss']
})
export class AddLotComponent implements OnInit {
  currentDate: Date = new Date();

  lot: Lot = {
    id: "",
    productId: 0,
    quantity: 0,
    expirationDate: "",
  }
  lotData?: FormData;

  isSubmitted: boolean = false;
  errorMessage: string = "";
  formValid: boolean = true;

  constructor(private service: ProductService) {
  }

  ngOnInit(): void {

  }

  submitForm() {
    this.formValid = this.isFormValid();
    if (this.isFormValid()) {
      this.lotData = new FormData();
      this.lotData?.append('id', generateLotId());
      this.lotData?.append('productId', this.lot.productId.toString());
      this.lotData?.append('quantity', this.lot.quantity.toString());
      this.lotData?.append('expirationDate', this.lot.expirationDate);

      this.service.addLot(this.lotData);
      this.isSubmitted = true;
    } else {
      this.isSubmitted = false;
      this.errorMessage = "Please make sure the quantity is greater than 0 and the expiration date is in the future.";
    }
  }

  isFormValid(): boolean {
    const quantity = this.lot.quantity;
    const expirationDate = new Date(this.lot.expirationDate);

    return quantity > 0 && expirationDate > this.currentDate;
  }

}
