import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import minExtraChar from "src/solutions/2707.extra-characters-in-a-string";
import data from "../mocks/2707.mock";

describe("2707.Extra Characters in a String", () => {
    it("test case 1", () => {
        strictEqual(minExtraChar(...data[0]), 1);
    });

    it("test case 2", () => {
        strictEqual(minExtraChar(...data[1]), 3);
    });

    it("test case 10", () => {
        strictEqual(minExtraChar(...data[2]), 2);
    });

    it("test case 200", () => {
        strictEqual(minExtraChar(...data[3]), 7);
    });

    it("test case 695", () => {
        strictEqual(minExtraChar(...data[4]), 2);
    });
});
