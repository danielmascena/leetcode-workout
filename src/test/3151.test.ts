import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import isArraySpecial from "src/solutions/3151.special-array-i";
import data from "src/mocks/3151.mock";

describe("[3151] Special Array I", () => {
  it("test case 1", () => {
    equal(isArraySpecial(data[0]), true);
  });

  it("test case 2", () => {
    equal(isArraySpecial(data[1]), true);
  });

  it("test case 3", () => {
    equal(isArraySpecial(data[2]), false);
  });

  it("test case 4", () => {
    equal(isArraySpecial(data[3]), true);
  });

  it("test case 5", () => {
    equal(isArraySpecial(data[4]), true);
  });

  it("test case 6", () => {
    equal(isArraySpecial(data[5]), false);
  });

  it("test case 7", () => {
    equal(isArraySpecial(data[6]), false);
  });

  it("test case 8", () => {
    equal(isArraySpecial(data[7]), false);
  });

  it("test case 9", () => {
    equal(isArraySpecial(data[8]), true);
  });

  it("test case 10", () => {
    equal(isArraySpecial(data[9]), true);
  });

  it("test case 11", () => {
    equal(isArraySpecial(data[10]), true);
  });
});
