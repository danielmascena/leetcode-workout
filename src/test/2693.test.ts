import { describe, it } from "node:test";
import { equal, deepEqual } from "node:assert/strict";

import "2693.call-function-with-custom-context-attempted";
import mock from "src/mocks/2693.mock";

describe("2693.", () => {
  it("test 1", () => {
    const [fn, [context, ...args]] = mock[0];
    equal(fn.callPolyfill(context, ...args), 12);
  });

  it("test 2", () => {
    const [fn, [context, ...args]] = mock[1];
    equal(fn.callPolyfill(context, ...args), "The cost of the burger is 11");
  });

  it("test 54", () => {
    const [fn, [context, ...args]] = mock[2];
    deepEqual(fn.callPolyfill(context, ...args), ["x", "y"]);
  });
});
