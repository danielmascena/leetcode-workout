import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import clearDigits from "src/solutions/3174.clear-digits";
import data from "src/mocks/3174.mock";

describe("[3174] Clear Digits", () => {
  it("test case 1", () => {
    equal(clearDigits(data[0]), "abc");
  });

  it("test case 2", () => {
    equal(clearDigits(data[1]), "");
  });

  it("test case 3", () => {
    equal(clearDigits(data[2]), "a");
  });

  it("test case 4", () => {
    equal(clearDigits(data[3]), "xzuzghilydk");
  });

  it("test case 5", () => {
    equal(clearDigits(data[4]), "xjkpaaovhqckjhrndtbobgeke");
  });

  it("test case 6", () => {
    equal(clearDigits(data[5]), "pjttxacvvtxwrhvwajpasfnhtpweavsoed");
  });

  it("test case 7", () => {
    equal(clearDigits(data[6]), "rrytkqwniszduuelqbedqdbzimoszqwxvxhpoarbu");
  });

  it("test case 8", () => {
    equal(clearDigits(data[7]), "wezofxupfwygbjwdxxayaegwjzgqloneisppq");
  });

  it("test case 9", () => {
    equal(clearDigits(data[8]), "dsiafroonbnkqzmlidlpzwzuitxnsy");
  });

  it("test case 10", () => {
    equal(clearDigits(data[9]), "syqeqyq");
  });
});
