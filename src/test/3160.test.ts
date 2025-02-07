import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import queryResults from "src/solutions/3160.find-the-number-of-distinct-colors-among-the-balls";
import data from "src/mocks/3160.mock";

describe("[3160] Find the Number of Distinct Colors Among the Balls", () => {
  it("test case 1", () => {
    deepEqual(queryResults(...data[0]), [1, 2, 2, 3]);
  });

  it("test case 2", () => {
    deepEqual(queryResults(...data[1]), [1, 2, 2, 3, 4]);
  });

  it("test case 3", () => {
    deepEqual(queryResults(...data[2]), [1, 2, 3]);
  });

  it("test case 4", () => {
    deepEqual(queryResults(...data[3]), [1,1,1,1,2]);
  });

  it("test case 5", () => {
    deepEqual(queryResults(...data[4]), [1,2,1,2,2]);
  });

  it("test case 6", () => {
    deepEqual(queryResults(...data[5]), [1,1,2,3,4]);
  });

  it("test case 7", () => {
    deepEqual(queryResults(...data[6]), [1,1,1,2,3]);
  });

  it("test case 8", () => {
    deepEqual(queryResults(...data[7]), [1,1,2,3,4,4]);
  });

  it("test case 9", () => {
    deepEqual(queryResults(...data[8]), [1,1]);
  });

  it("test case 10", () => {
    deepEqual(queryResults(...data[9]), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]);
  });
});
