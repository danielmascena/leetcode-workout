import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import minSwaps from "src/solutions/1963.minimum-number-of-swaps-to-make-the-string-balanced";
import data from "../mocks/1963.mock";

describe("1963.Minimum Number of Swaps to Make the String Balanced", () => {
    it("test case 1", () => {
        strictEqual(minSwaps(data[0]), 1);
    });

    it("test case 2", () => {
        strictEqual(minSwaps(data[1]), 2);
    });

    it("test case 3", () => {
        strictEqual(minSwaps(data[2]), 0);
    });

    it("test case 16", () => {
        strictEqual(minSwaps(data[3]), 2);
    });

    it("test case 20", () => {
        strictEqual(minSwaps(data[4]), 1);
    });

    it("test case 19", () => {
        strictEqual(minSwaps(data[5]), 5);
    });

    it("test case 48", () => {
        strictEqual(minSwaps(data[6]), 0);
    });
});