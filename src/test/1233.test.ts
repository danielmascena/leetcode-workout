import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import removeSubfolders from "src/solutions/1233.remove-sub-folders-from-the-filesystem";
import data from "../mocks/1233.mock";

describe("1233.", () => {
  it("test case 1", () => {
    strictEqual(String(removeSubfolders(data[0])), "/a,/c/d,/c/f");
  });

  it("test case 2", () => {
    strictEqual(String(removeSubfolders(data[1])), "/a");
  });

  it("test case 3", () => {
    strictEqual(String(removeSubfolders(data[2])), "/a/b/c,/a/b/ca,/a/b/d");
  });
});
