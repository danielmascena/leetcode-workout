import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import uncommonFromSentences from "884.uncommon-words-from-two-sentences";
import data from "../mocks/884.mock";

import { convertArrayToString } from "src/utils/helpers";

describe("884.Uncommon Words from Two Sentences", _ => {
    it("test case 1", _ => {
        strictEqual(convertArrayToString(uncommonFromSentences(...data[0])), "sweet,sour");
    });

    it("test case 2", _ => {
        strictEqual(convertArrayToString(uncommonFromSentences(...data[1])), "banana");
    });

    it("test case 3", _ => {
        strictEqual(convertArrayToString(uncommonFromSentences(...data[2])), "ejt");
    })
});