import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import subdomainVisits from "src/solutions/811.subdomain-visit-count";
import data from "../mocks/811.mock";
import { stringifyArray } from "src/utils/helpers";

describe("811.Subdomain Visit Count", () => {
  it("test case 1", () => {
    strictEqual(
      stringifyArray(subdomainVisits(data[0]).sort()),
      stringifyArray(
        ["9001 leetcode.com", "9001 discuss.leetcode.com", "9001 com"].sort()
      )
    );
  });

  it("test case 2", () => {
    strictEqual(
      stringifyArray(subdomainVisits(data[1]).sort()),
      stringifyArray(
        [
          "901 mail.com",
          "50 yahoo.com",
          "900 google.mail.com",
          "5 wiki.org",
          "5 org",
          "1 intel.mail.com",
          "951 com",
        ].sort()
      )
    );
  });
});
