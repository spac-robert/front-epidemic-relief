import {Component, OnInit} from '@angular/core';
import {Lot, ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";
import {generateLotId} from "../../../utils/utils";
import {Router} from "@angular/router";

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
  productList: ProductModel[] = [];
  isModalOpen = false;
  textToDisplay = '';

  constructor(private service: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  submitForm() {
    this.formValid = this.isFormValid();
    if (this.isFormValid()) {
      this.lotData = new FormData();
      this.lotData?.append('id', generateLotId());
      this.lotData?.append('productId', this.lot.productId.toString());
      this.lotData?.append('quantity', this.lot.quantity.toString());
      this.lotData?.append('expirationDate', this.lot.expirationDate);

      this.service.addLot(this.lotData).subscribe((response) => {
        console.log(response);
        if (response.ok) {
          this.isModalOpen = true;
          if (response.body) {
            this.textToDisplay = response.body.message;
            this.setDefaultValue();
            //TODO sa se dea refresh la pagina
            this.router.navigate(['/product/add/lot']);
          }
        }
      });
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

  onModalOpenChange(updatedValue: boolean) {
    this.isModalOpen = updatedValue;
  }

  fetchProducts() {
    this.service.getAllProducts().subscribe(
      (products: ProductModel[]) => {
        this.productList = products;
        console.log(this.productList);
      },
      (error) => {
        console.error('Failed to fetch products:', error);
        this.productList = [];
      }
    );
  }

  getNextDayDate(): string {
    const nextDay = new Date(this.currentDate.getTime() + 24 * 60 * 60 * 1000); // Adding 24 hours in milliseconds
    return nextDay.toISOString().split('T')[0];
  }

  private setDefaultValue() {
    this.lot = {
      id: "",
      productId: 0,
      quantity: 0,
      expirationDate: "",
    }
  }
}
