import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import findMinDifference from "src/solutions/539.minimum-time-difference";
import data from "../mocks/539.mock";

describe("539.Minimum Time Difference", () => {
    it("test case 1", () => {
        strictEqual(findMinDifference(data[0]), 1);
    });

    it("test case 2", () => {
        strictEqual(findMinDifference(data[1]), 0);
    });

    it("test case 3", () => {
        strictEqual(findMinDifference(data[2]), 720);
    });

    it("test case 55", () => {
        strictEqual(findMinDifference(data[3]), 60);
    });

    it("test case 60", () => {
        strictEqual(findMinDifference(data[4]), 61);
    });

    it("test case 111", () => {
        strictEqual(findMinDifference(data[5]), 147);
    });
});