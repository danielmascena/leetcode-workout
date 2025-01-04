type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }
  | Function;

interface Function {
  callPolyfill(
    context: Record<string, JSONValue>,
    ...args: JSONValue[]
  ): JSONValue;
}

Function.prototype.callPolyfill = function (context, ...args): JSONValue {
  const cloneContext = { ...context };
  const { name } = this;
  Object.defineProperty(cloneContext, name, {
    value: this,
    enumerable: false,
  });

  return (cloneContext[name] as Function)(...args);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
