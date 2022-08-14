import { Mixin } from "ts-mixer";

import { WithHooks } from "./base-model.hooks";

export class BaseModel extends Mixin(WithHooks) {
  id!: string;

  constructor(props: Record<string, any>) {
    super();
    this.fill(props);
  }

  fill(props: Record<string, any>) {
    for (const key in props) {
      this[key] = props[key];
    }
  }

  update(data: Record<string, any>) {
    return this;
  }

  serialize(options: { fresh?: boolean } = {}) {}

  static parse(data: Record<string, any>) {}

  static create<C extends typeof BaseModel = typeof BaseModel>(
    this: C,
    props: Record<string, any>
  ): InstanceType<C> {
    return new this(props) as InstanceType<C>;
  }
}
