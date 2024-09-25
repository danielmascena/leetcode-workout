import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import shortestPalindrome from "src/solutions/214.shortest-palindrome";
import data from "../mocks/214.mock";

describe("214.Shortest Palindrome", () => {
    it("test case 1", () => {
        strictEqual(shortestPalindrome(data[0]), "aaacecaaa");
    });

    it("test case 2", () => {
        strictEqual(shortestPalindrome(data[1]), "dcbabcd");
    });

    it("test case 104", () => {
        strictEqual(shortestPalindrome(data[2]), "a");
    });

    it("test case 105", () => {
        strictEqual(shortestPalindrome(data[3]), "aba");
    });

    it("test case 107", () => {
        strictEqual(shortestPalindrome(data[4]), "dcabbacd");
    });
});