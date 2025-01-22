import { describe, it } from "node:test";
import { equal } from "node:assert";

import highestPeak from "src/solutions/1765.map-of-highest-peak";
import data from "src/mocks/1765.mock";

describe("[1765] Map of Highest Peak", () => {
  it("test case 1", () => {
    equal(Math.max(...highestPeak(data[0]).flat()), 2);
  });

  it("test case 2", () => {
    equal(Math.max(...highestPeak(data[1]).flat()), 2);
  });

  it("test case 3", () => {
    equal(Math.max(...highestPeak(data[2]).flat()), 0);
  });

  it("test case 4", () => {
    equal(Math.max(...highestPeak(data[3]).flat()), 1);
  });

  it("test case 5", () => {
    equal(Math.max(...highestPeak(data[4]).flat()), 4);
  });

  it("test case 6", () => {
    equal(Math.max(...highestPeak(data[5]).flat()), 1);
  });

  it("test case 7", () => {
    equal(Math.max(...highestPeak(data[6]).flat()), 5);
  });

  it("test case 8", () => {
    equal(Math.max(...highestPeak(data[7]).flat()), 2);
  });

  it("test case 9", () => {
    equal(Math.max(...highestPeak(data[8]).flat()), 4);
  });

  it("test case 10", () => {
    equal(Math.max(...highestPeak(data[9]).flat()), 2);
  });
});
