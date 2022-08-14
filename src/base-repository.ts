import { defineStore, Store, StoreDefinition } from "pinia";

import {
  PiniaGetters,
  PickState,
  PickGetters,
  PickActions,
  PiniaActions
} from "./pinia-repository.types";
import { BaseActions, baseRepositoryActions } from "./base-repository.actions";
import { BaseGetters, baseRepositoryGetters } from "./base-repository.getters";
import { baseRepositoryState, BaseState } from "./base-repository.state";
import { BaseModel } from "./base-model";

export type BaseRepositoryStore = Store<
  "base",
  BaseState,
  BaseGetters,
  BaseActions
>;

export const defineRepositoryStore = <S extends Store<string>>() => <
  TModel extends typeof BaseModel,
  Id extends string
>(
  Model: TModel,
  id: Id,
  store: {
    state?: () => Omit<PickState<S>, keyof BaseState>;
    getters?: Partial<PiniaGetters<S>>;
    actions?: Partial<PiniaActions<S>>;
  }
) =>
  (defineStore(id, {
    state: () => ({
      ...baseRepositoryState(),
      ...store.state?.()
    }),
    getters: {
      ...baseRepositoryGetters,
      ...store.getters
    },
    actions: {
      ...baseRepositoryActions(Model),
      ...store.actions
    }
  }) as unknown) as StoreDefinition<
    Id,
    PickState<S>,
    PickGetters<S>,
    PickActions<S>
  >;
