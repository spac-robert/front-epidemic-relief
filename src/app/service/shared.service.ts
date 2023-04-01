import {Injectable} from "@angular/core";
import {ProductOrder} from "../dto/product.model";
import {CartModel} from "../dto/cart.model";

@Injectable(
  {providedIn: 'root'}
)
export class SharedService {

  products: ProductOrder[]=[]

}
