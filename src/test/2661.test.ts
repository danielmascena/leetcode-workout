import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import firstCompleteIndex from "2661.first-completely-painted-row-or-column";
import data from "src/mocks/2661.mock";

describe("[2661] First completely painted row or column", () => {
  it("test case 1", () => {
    equal(firstCompleteIndex(...data[0]), 2);
  });

  it("test case 2", () => {
    equal(firstCompleteIndex(...data[1]), 3);
  });

  it("test case 3", () => {
    equal(firstCompleteIndex(...data[2]), 2);
  });

  it("test case 4", () => {
    equal(firstCompleteIndex(...data[3]), 2);
  });

  it("test case 5", () => {
    equal(firstCompleteIndex(...data[4]), 4);
  });

  it("test case 6", () => {
    equal(firstCompleteIndex(...data[5]), 5);
  });

  it("test case 7", () => {
    equal(firstCompleteIndex(...data[6]), 8);
  });

  it("test case 8", () => {
    equal(firstCompleteIndex(...data[7]), 8);
  });

  it("test case 9", () => {
    equal(firstCompleteIndex(...data[8]), 11);
  });

  it("test case 10", () => {
    equal(firstCompleteIndex(...data[9]), 645);
  });
});
