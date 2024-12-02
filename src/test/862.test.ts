import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import shortestSubarray from "src/solutions/862.shortest-subarray-with-sum-at-least-k";
import data from "src/mocks/862.mock";

describe("862.", () => {
  test("case 1", () => {
    equal(shortestSubarray(...data[0]), 1);
  });

  test("case 2", () => {
    equal(shortestSubarray(...data[1]), -1);
  });

  test("case 3", () => {
    equal(shortestSubarray(...data[2]), 3);
  });

  test("case 64", () => {
    equal(shortestSubarray(...data[3]), 3);
  });

  test("case 5", () => {
    equal(shortestSubarray(...data[4]), 2);
  });

  test("case 6", () => {
    equal(shortestSubarray(...data[5]), 2);
  });

  test("case 7", () => {
    equal(shortestSubarray(...data[6]), 3);
  });

  test("case 8", () => {
    equal(shortestSubarray(...data[7]), 2);
  });

  test("case 9", () => {
    equal(shortestSubarray(...data[8]), 2);
  });

  test("case 10", () => {
    equal(shortestSubarray(...data[9]), 1);
  });

  test("case 11", () => {
    equal(shortestSubarray(...data[10]), 2);
  });

  test("case 12", () => {
    equal(shortestSubarray(...data[11]), 2);
  });

  test("case 13", () => {
    equal(shortestSubarray(...data[12]), 2);
  });

  test("case 14", () => {
    equal(shortestSubarray(...data[13]), 2);
  });

  test("case 15", () => {
    equal(shortestSubarray(...data[14]), 3);
  });

  test("case 16", () => {
    equal(shortestSubarray(...data[15]), 2);
  });

  test("case 17", () => {
    equal(shortestSubarray(...data[16]), 2);
  });

  test("case 18", () => {
    equal(shortestSubarray(...data[17]), 1);
  });

  test("case 19", () => {
    equal(shortestSubarray(...data[18]), 2);
  });

  test("case 76", () => {
    equal(shortestSubarray(...data[19]), 1);
  });
});
