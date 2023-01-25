import {AppState} from "../../app.state";
import {createSelector} from "@ngrx/store";
import {ProductModel} from "../../dto/product.model";

const selectProducts = (state: AppState) => state.products;

export const selectProductList = createSelector(
  selectProducts,
  (products: ProductModel[]) => products
);
