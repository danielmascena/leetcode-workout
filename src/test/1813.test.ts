import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import areSentencesSimilar from "src/solutions/1813.sentence-similarity-iii";
import data from "../mocks/1813.mock";

describe("1813.Sentence Similarity III", () => {
    
    it("test case 1", () => strictEqual(areSentencesSimilar(...data[0]), true));
    
    it("test case 2", () => strictEqual(areSentencesSimilar(...data[1]), false));
    
    it("test case 3", () => strictEqual(areSentencesSimilar(...data[2]), true));
    
    it("test case 137", () => strictEqual(areSentencesSimilar(...data[3]), true));
    
    it("test case 136", () => strictEqual(areSentencesSimilar(...data[4]), true));
    
    it("test case 133", () => strictEqual(areSentencesSimilar(...data[5]), false));
    
    it("test case 135", () => strictEqual(areSentencesSimilar(...data[6]), true));
    
    it("test case 132", () => strictEqual(areSentencesSimilar(...data[7]), false));

    it("test case 75", () => strictEqual(areSentencesSimilar(...data[8]), true));

    it("test case 66", () => strictEqual(areSentencesSimilar(...data[9]), true));
    
    it("test case 43", () => strictEqual(areSentencesSimilar(...data[10]), false));

    it("test case 31", () => strictEqual(areSentencesSimilar(...data[11]), false));

    it("test case 135", () => strictEqual(areSentencesSimilar(...data[12]), true));

    it("test case 137", () => strictEqual(areSentencesSimilar(...data[13]), false));

    it("test case 135", () => strictEqual(areSentencesSimilar(...data[14]), false));
});