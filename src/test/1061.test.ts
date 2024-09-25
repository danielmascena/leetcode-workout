import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import smallestEquivalentString from "src/solutions/1061.lexicographically-smallest-equivalent-string";
import data from "../mocks/1061.mock";

describe("1061.Lexicographically Smallest Equivalent String", () => {
    it("test case 1", () => {
        strictEqual(smallestEquivalentString(...data[0]), "makkek");
    });
    it("test case 2", () => {
        strictEqual(smallestEquivalentString(...data[1]), "hdld");
    });
    it("test case 3", () => {
        strictEqual(smallestEquivalentString(...data[2]), "aauaaaaada");
    });

    it("test case 19", () => {
        strictEqual(smallestEquivalentString(...data[3]), "paawwaakaanaawxarkxqlwtatqwkqjrzsqmasuaoaxaaanvayi");
    });

    it("test case 22", () => {
        strictEqual(smallestEquivalentString(...data[4]), "aotutsraanyvpzusrnsxanapqanxrvamarpaaaaaqotaayzayl")
    })
});