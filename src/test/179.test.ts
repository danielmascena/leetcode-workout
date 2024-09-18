import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import largestNumber from "179.largest-number";
import data from "../mocks/179.mock";

describe("179.Largest Number", () => {
    it("test case 1", () => {
        strictEqual(largestNumber(data[0]), "210");
    });

    it("test case 2", () => {
        strictEqual(largestNumber(data[1]), "9534330");
    });

    it("test case 191", () => {
        strictEqual(largestNumber(data[2]), "1113111311");
    });
});