import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import minLength from "src/solutions/2696.minimum-string-length-after-removing-substrings";
import data from "../mocks/2696.mock";

describe("2696.Minimum String Length After Removing Substrings", () => {
    it("test case 1", () => {
        strictEqual(minLength(data[0]), 2);
    });

    it("test case 2", () => {
        strictEqual(minLength(data[1]), 5);
    });
});