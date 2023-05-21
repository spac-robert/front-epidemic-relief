import {Injectable} from "@angular/core";
import {ProductOrder} from "../dto/product.model";

@Injectable(
  {providedIn: 'root'}
)
export class SharedService {

  products: ProductOrder[]=[]

}
