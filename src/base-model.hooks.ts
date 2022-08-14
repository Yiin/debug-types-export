export class WithHooks {
  static methods: Set<string | symbol>;
  protected methods = new Set<string | symbol>();

  static callStaticHooks(name: string, ...args: any[]) {}

  protected __init__() {}

  callHooks(name: string, ...args) {}
}
