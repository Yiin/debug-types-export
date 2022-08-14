import { hasMixin } from "ts-mixer";

import { PiniaGetters, PiniaGetterTree } from "./pinia-repository.types";
import { BaseModel } from "./base-model";
import { BaseRepositoryStore } from "./base-repository";

type ID = string | number;

export interface BaseGetters<TModel extends BaseModel = BaseModel>
  extends PiniaGetterTree {}

export const baseRepositoryGetters: PiniaGetters<BaseRepositoryStore> = {};
