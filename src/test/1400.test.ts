import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import canConstruct from "src/solutions/1400.construct-k-palindrome-strings";
import data from "src/mocks/1400.mock";

describe("1400.", () => {
  it("case 1", () => {
    equal(canConstruct(...data[0]), true);
  });

  it("case 2", () => {
    equal(canConstruct(...data[1]), false);
  });

  it("case 3", () => {
    equal(canConstruct(...data[2]), true);
  });

  it("case 4", () => {
    equal(canConstruct(...data[3]), false);
  });

  it("case 5", () => {
    equal(canConstruct(...data[4]), true);
  });

  it("case 6", () => {
    equal(canConstruct(...data[5]), true);
  });

  it("case 7", () => {
    equal(canConstruct(...data[6]), false);
  });

  it("case 8", () => {
    equal(canConstruct(...data[7]), false);
  });

  it("case 9", () => {
    equal(canConstruct(...data[8]), true);
  });

  it("case 10", () => {
    equal(canConstruct(...data[9]), true);
  });

  it("case 11", () => {
    equal(canConstruct(...data[10]), true);
  });

  it("case 69", () => {
    equal(canConstruct(...data[11]), true);
  });
});
