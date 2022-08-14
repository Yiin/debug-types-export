import { PiniaState } from "./pinia-repository.types";
import { BaseModel } from "./base-model";
import { BaseRepositoryStore } from "./base-repository";

export interface BaseState<TModel extends BaseModel = BaseModel> {
  items: TModel[];
}

export const baseRepositoryState: PiniaState<BaseRepositoryStore> = () => ({
  items: []
});
