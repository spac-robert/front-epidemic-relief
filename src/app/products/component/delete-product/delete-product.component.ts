import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from "../../../dto/product.model";
import {ProductService} from "../../../service/product.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit, OnDestroy {

  productListPage: ProductModel[] = [];
  formValid: boolean = true;
  totalLength: any;
  page: number = 1
  pageSize: number = 12
  sortBy: string = "name"
  sortDir: string = "asc"
  getSortedProductSubscription: Subscription | undefined
  searchQuery: string = '';
  errorMessage: string = "";

  constructor(private service: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.searchQuery.trim() === '') {
      this.getProducts(this.sortBy, this.sortDir, this.pageSize)
    }
  }

  getProducts(sortBy: string, sortDir: string, pageSize: number) {
    let request;
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      request = this.service.searchProducts(this.searchQuery, sortBy, sortDir, pageSize, this.page - 1);
    } else {
      request = this.service.getProducts(pageSize, this.page - 1, sortBy, sortDir);
    }
    console.log(request)
    ;this.getSortedProductSubscription = request.subscribe(
      (products) => {
        products.content.forEach(product => {
          if (product.mediaUrl != null) {
            product.image = 'data:image/jpeg;base64,' + product.mediaUrl.data
          }
        })
        this.productListPage = products.content;
        this.totalLength = products.totalElements;
        this.pageSize = products.pageable.pageSize;
        this.page = products.pageable.pageNumber + 1;
      }
    );
  }

  submitForm(product: ProductModel) {
    this.service.deleteProduct(product.id).subscribe((response) => {
      if (response.status === 200) {
        this.getProducts(this.sortBy, this.sortDir, this.pageSize)
        this.router.navigate(['/product/delete']);
      }
    }, (error) => {
      console.error('Error:', error);
      this.errorMessage = error.error.message;
    });
  }

  ngOnDestroy(): void {
    this.getSortedProductSubscription?.unsubscribe();
  }

  //TODO dupa ce dau pe delete vreau sa se faca refresh la pagina

  onPageChange($event: number) {
    this.page = $event
    if (this.searchQuery.trim() === '') {
      this.getProducts(this.sortBy, this.sortDir, this.pageSize)
    }
  }

  searchProducts() {
    console.log(this.searchQuery)
    if (this.searchQuery.trim() === '') {
      this.getProducts(this.sortBy, this.sortDir, this.pageSize)
    }
    this.service.searchAllProducts(this.searchQuery).subscribe(
      (products: ProductModel[]) => {
        this.productListPage = products;
        this.productListPage.forEach(product => {
          product.image = 'data:image/jpeg;base64,' + product.mediaUrl.data;
        });
      },
      (error: any) => {
        console.error('Failed to search products:', error);
      }
    );
  }
}
