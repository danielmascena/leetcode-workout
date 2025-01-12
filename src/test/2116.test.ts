import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import canBeValid from "src/solutions/2116.check-if-a-parentheses-string-can-be-valid";
import data from "src/mocks/2116.mock";

describe("[2116] check if parentheses string can be valid", () => {
  it("test case 1", () => {
    equal(canBeValid(...data[0]), true);
  });

  it("test case 2", () => {
    equal(canBeValid(...data[1]), true);
  });

  it("test case 3", () => {
    equal(canBeValid(...data[2]), false);
  });

  it("test case 4", () => {
    equal(canBeValid(...data[3]), false);
  });

  it("test case 5", () => {
    equal(canBeValid(...data[4]), true);
  });

  it("test case 6", () => {
    equal(canBeValid(...data[5]), true);
  });

  it("test case 7", () => {
    equal(canBeValid(...data[6]), false);
  });

  it("test case 8", () => {
    equal(canBeValid(...data[7]), false);
  });

  it("test case 9", () => {
    equal(canBeValid(...data[8]), false);
  });

  it("test case 10", () => {
    equal(canBeValid(...data[9]), false);
  });

  it("test case 11", () => {
    equal(canBeValid(...data[10]), false);
  });
});
