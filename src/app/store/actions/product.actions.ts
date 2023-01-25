import {Action, createAction, props} from "@ngrx/store";
import {ProductModel} from "../../dto/product.model";

export const ADD_PRODUCT = "[Product] Add Product"
export const LOAD_PRODUCTS = "[Product] Load Products"
export const LOAD_PRODUCTS_SUCCESS = "[Product] Load Products Success"
export const LOAD_PRODUCTS_FAIL = "[Product] Load Products Fail"

// export class AddProduct implements Action {
//   readonly type = ADD_PRODUCT
//
//   constructor(public payload: ProductModel) {
//   }
// }
//
// export class GetProducts implements Action {
//   readonly type = GET_PRODUCTS
//   constructor(public payload: ProductModel[]) {
//   }
// }
//
// export type ProductActions =
//   AddProduct |
//   GetProducts
export const loadProducts = createAction(LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{ products: ProductModel[] }>());
export const loadProductsFail = createAction(LOAD_PRODUCTS_FAIL, props<{ error: any }>());
