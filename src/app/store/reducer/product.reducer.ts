import {ProductModel} from "../../dto/product.model";
import * as ProductActions from './../actions/product.actions'
import {AppState} from "../../app.state";
import {createReducer, on} from "@ngrx/store";
import {loadProductsSuccess} from "./../actions/product.actions";

// const initialState: ProductModel = {
//   name: '',
//   description: '',
//   expirationDate: '',
//   manufacturer: '',
//   price: 0,
//   media: {
//     uploadImageData: null,
//     mime: '',
//     url: '',
//   },
//   mediaUrl: ""
// }
//
// export function myProductReducer(state: ProductModel[] = [initialState], action: ProductActions.ProductActions) {
//   switch (action.type) {
//     case ProductActions.ADD_PRODUCT:
//       return [...state, action.payload]
//     default:
//       return state;
//   }
// }
const initialState: AppState = {
  products: []
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, {products}) => {
    return {...state, products}
  })
);
