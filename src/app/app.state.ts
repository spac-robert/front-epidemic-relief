import {ProductModel} from "./dto/product.model";
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  readonly products: ProductModel[];
}
