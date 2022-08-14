import { Store } from "pinia";
import { defineRepositoryStore } from "./base-repository";
import { BaseActions } from "./base-repository.actions";
import { BaseGetters } from "./base-repository.getters";
import { BaseState } from "./base-repository.state";

import { Product } from "./product.model";

interface ProductRepositoryState extends BaseState<Product> {}
interface ProductRepositoryGetters extends BaseGetters<Product> {
  foo(): void;
}
interface ProductRepositoryActions extends BaseActions<Product> {}

type ProductRepositoryStore = Store<
  "ProductRepository",
  ProductRepositoryState,
  ProductRepositoryGetters,
  ProductRepositoryActions
>;

export const useProductRepository = defineRepositoryStore<
  ProductRepositoryStore
>()(Product, "ProductRepository", {
  state: () => ({}),
  getters: {
    apiName: () => "products",
    apiResourceName: () => "product",
    foo() {
      const x = this.items[0];
    }
  },
  actions: {}
});
