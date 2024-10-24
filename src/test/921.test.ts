import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import minAddToMakeValid from "src/solutions/921.minimum-add-to-make-parentheses-valid";
import data from "../mocks/921.mock";

describe("921.Minimum Add to Make Parentheses Valid", () => {
    
    it("test case 1", () => strictEqual(minAddToMakeValid(data[0]), 1));

    it("test case 2", () => strictEqual(minAddToMakeValid(data[1]), 3));

    it("test case 44", () => strictEqual(minAddToMakeValid(data[2]), 4));
});