import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import canArrange from "src/solutions/1497.check-if-array-pairs-are-divisible-by-k";
import data from "../mocks/1497.mock";

describe("1497.Check If Array Pairs Are Divisible by k", () => {
    it("test case 1", () => {
        strictEqual(canArrange(...data[0]), true);
    });

    it("test case 2", () => {
        strictEqual(canArrange(...data[1]), true);
    });

    it("test case 3", () => {
        strictEqual(canArrange(...data[2]), false);
    });

    it("test case 25", () => {
        strictEqual(canArrange(...data[3]), false);
    });

    it.skip("test case 29", () => {
        strictEqual(canArrange(...data[4]), false);
    });

    it("test case n1", () => {
        strictEqual(canArrange(...data[5]), true);
    });

    it("test case n2", () => {
        strictEqual(canArrange(...data[6]), true);
    });

    it("test case n3", () => {
        strictEqual(canArrange(...data[7]), true);
    });

    it("test case n4", () => {
        strictEqual(canArrange(...data[8]), false);
    });

    it.skip("test case n5", () => {
        strictEqual(canArrange(...data[9]), false);
    });

    it("test case n6", () => {
        strictEqual(canArrange(...data[10]), true);
    });

    it("test case n7", () => {
        strictEqual(canArrange(...data[11]), true);
    });
});