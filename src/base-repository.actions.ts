import { BaseModel } from "./base-model";
import { BaseRepositoryStore } from "./base-repository";
import { PiniaActions, PiniaActionTree } from "./pinia-repository.types";

export interface BaseActions<TModel extends BaseModel = BaseModel>
  extends PiniaActionTree {}

export const baseRepositoryActions = <
  T extends typeof BaseModel = typeof BaseModel
>(
  Model: T
): PiniaActions<BaseRepositoryStore> => ({});
