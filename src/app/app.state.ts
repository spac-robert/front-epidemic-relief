import {ProductModel} from "./dto/product.model";
import {ActionReducerMap} from "@ngrx/store";

//TODO aici pot sa pun mai multe de exemplu readonly order:Order[] ....
export interface AppState {
  readonly products: ProductModel[];
}

// export const productReducer: ActionReducerMap<AppState, any> = {
//   products: myProductReducer
// }
