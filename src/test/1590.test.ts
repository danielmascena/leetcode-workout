import { beforeEach, describe, it } from "node:test";
import { strictEqual } from "node:assert";

import minSubarray from "src/solutions/1590.make-sum-divisible-by-p";
import data from "../mocks/1590.mock";

describe("1590.Make Sum Divisible by P", () => {
    let test = 1;

    beforeEach(() => console.log(`\x1b[42m Test case ${test++} \x1b[0m`));

    it("test case 1", () => {
        strictEqual(minSubarray(...data[0]), 1);
    });

    it("test case 2", () => {
        strictEqual(minSubarray(...data[1]), 2);
    });

    it("test case 3", () => {
        strictEqual(minSubarray(...data[2]), 0);
    });
 
    it("test case 108", () => {
        strictEqual(minSubarray(...data[3]), -1);
    });
  
    it("test case 127", () => {
        strictEqual(minSubarray(...data[4]), -1);
    });
      
    it("test case n1", () => {
        strictEqual(minSubarray(...data[5]), 11);
    });
     
    it("test case n2", () => {
        strictEqual(minSubarray(...data[6]), 3);
    });

    it("test case n3", () => {
        strictEqual(minSubarray(...data[7]), -1);
    });
});