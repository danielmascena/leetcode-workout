import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import smallestChair from "src/solutions/1942.the-number-of-the-smallest-unoccupied-chair";

import data from "../mocks/1942.mock";

describe("1942.The Number of the Smallest Unoccupied Chair", () => {
    it("test case 1", () => {
        strictEqual(smallestChair(...data[0]), 1);
    });

    it("test case 2", () => {
        strictEqual(smallestChair(...data[1]), 2);
    });

    it("test case 58", () => {
        strictEqual(smallestChair(...data[2]), 68);
    });
});