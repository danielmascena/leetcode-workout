import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import largestNumber from "src/solutions/179.largest-number";
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

    it("test case 226", () => {
        strictEqual(largestNumber(data[3]), "343234323");
    });

    it("test case 200", () => {
        strictEqual(largestNumber(data[4]), "83088308830");
    });
});