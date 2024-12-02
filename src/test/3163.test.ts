import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import compressedString from "src/solutions/3163.string-compression-3";
import data from "src/mocks/3163.mock";

describe("3163.", () => {
  test("case 1", () => {
    strictEqual(compressedString(data[0]), "1a1b1c1d1e");
  });

  test("case 2", () => {
    strictEqual(compressedString(data[1]), "9a5a2b");
  });

  test("case 3", () => {
    strictEqual(compressedString(data[2]), "1o");
  });

  test("case 4", () => {
    strictEqual(compressedString(data[3]), "3v");
  });

  test("case 5", () => {
    strictEqual(compressedString(data[4]), "2x1l2a");
  });

  test("case 6", () => {
    strictEqual(compressedString(data[5]), "1x4b2j");
  });

  test("case 7", () => {
    strictEqual(compressedString(data[6]), "8y3f4c2q2w8f9r5a9y");
  });

  test("case 8", () => {
    strictEqual(compressedString(data[7]), "9u1u6c7v8y1l3y9q1o1a4q");
  });

  test("case 9", () => {
    strictEqual(compressedString(data[8]), "9y4y9t9t9t9t9t5t9v9v7v9a1a2j");
  });

  test("case 10", () => {
    strictEqual(
      compressedString(data[9]),
      "9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z4z9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m2m9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9i9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o2o9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p8p9a9a9a9a9a9a6a9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m2m9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q2q9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e9e8e9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o9o8o9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q1q9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j5j9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n4n9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9z9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s9s6s9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f3f9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t5t9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h9h4h9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n2n9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t9t1t9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m9m3m9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j9j2j9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n9n7n9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a8a9l9l9l9l9l9l7l9c9c9c9c9c9c9c6c9x9x2x2j9l1l"
    );
  });
});
