import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import continuousSubarrays from "2762.continuous-subarrays";
import data from "src/mocks/2762.mock";

describe("2762.", () => {
  it("case 1", () => {
    equal(continuousSubarrays(data[0]), 8);
  });

  it("case 2", () => {
    equal(continuousSubarrays(data[1]), 6);
  });

  it("case 3", () => {
    equal(continuousSubarrays(data[2]), 2);
  });

  it("case 4", () => {
    equal(continuousSubarrays(data[3]), 10);
  });

  it("case 5", () => {
    equal(continuousSubarrays(data[4]), 36);
  });

  it("case 6", () => {
    equal(continuousSubarrays(data[5]), 29);
  });

  it("case 7", () => {
    equal(continuousSubarrays(data[6]), 44);
  });

  it("case 8", () => {
    equal(continuousSubarrays(data[7]), 347);
  });

  it("case 9", () => {
    equal(continuousSubarrays(data[8]), 1098);
  });

  it("case 10", () => {
    equal(continuousSubarrays(data[9]), 20258);
  });
});
