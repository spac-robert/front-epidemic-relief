import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of, switchMap} from "rxjs";
import {loadProducts, loadProductsSuccess} from "../actions/product.actions";
import {ProductModel} from "../../dto/product.model";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private router: Router,
    private productService: ProductService
  ) {
  }
//TODO sa vad cum trebuie facut
  // loadProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadProducts),
  //     switchMap(() => {
  //       return this.productService.getProducts().pipe(
  //         map((products: ProductModel[]) => {
  //           return loadProductsSuccess({products});
  //         }),
  //         catchError((error) => of(loadProductsFail({error})))
  //       );
  //     })
}
