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
  lot: Lot = {
    id: "",
    productId: 0,
    quantity: 0,
    expirationDate: "",
  }
  lotData?: FormData;

  constructor(private service: ProductService) {
  }

  ngOnInit(): void {

  }

  submitForm() {
    this.lotData = new FormData();
    this.lotData?.append('id', generateLotId());
    this.lotData?.append('productId', this.lot.productId.toString());
    this.lotData?.append('quantity', this.lot.quantity.toString());
    this.lotData?.append('expirationDate', this.lot.expirationDate);

    this.service.addLot(this.lotData);
  }
}
