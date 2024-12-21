import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import maxTwoEvents from "2054.two-best-non-overlapping-events";
import mock from "src/mocks/2054.mock";

describe("2054.", () => {
  it("case 1", () => {
    equal(maxTwoEvents(mock[0]), 4);
  });

  it("case 2", () => {
    equal(maxTwoEvents(mock[1]), 5);
  });

  it("case 3", () => {
    equal(maxTwoEvents(mock[2]), 8);
  });

  it("case 4", () => {
    equal(maxTwoEvents(mock[3]), 70);
  });

  it("case 5", () => {
    equal(maxTwoEvents(mock[4]), 10);
  });

  it("case 6", () => {
    equal(maxTwoEvents(mock[5]), 85);
  });

  it("case 7", () => {
    equal(maxTwoEvents(mock[6]), 12);
  });

  it("case 8", () => {
    equal(maxTwoEvents(mock[7]), 4);
  });

  it("case 9", () => {
    equal(maxTwoEvents(mock[8]), 11);
  });

  it("case 10", () => {
    equal(maxTwoEvents(mock[9]), 165);
  });

  it("case 11", () => {
    equal(maxTwoEvents(mock[10]), 200000);
  });

  it("case 40", () => {
    equal(maxTwoEvents(mock[11]), 19951);
  });

  it("case 41", () => {
    equal(maxTwoEvents(mock[11]), 1000);
  });
});
