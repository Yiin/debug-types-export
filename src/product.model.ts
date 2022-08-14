import { Mixin } from "ts-mixer";
import { BaseModel } from "./base-model";

/**
 * Product model
 */
export class Product extends Mixin(BaseModel) {
  name!: string;
  identificationNumber!: string;
  description!: string;
  isService!: boolean;
  qty!: number;
}
