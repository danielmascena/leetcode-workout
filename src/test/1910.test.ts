import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import removeOccurrences from "src/solutions/1910.remove-all-occurrences-of-a-substring";
import data from "src/mocks/1910.mock";

describe("[1910] Remove All Occurrences of a Substring", () => {
  it("test case 1", () => {
    equal(removeOccurrences(...data[0]), "dab");
  });

  it("test case 2", () => {
    equal(removeOccurrences(...data[1]), "ab");
  });

  it("test case 3", () => {
    equal(removeOccurrences(...data[2]), "a");
  });

  it("test case 4", () => {
    equal(removeOccurrences(...data[3]), "");
  });

  it("test case 5", () => {
    equal(removeOccurrences(...data[4]), "b");
  });

  it("test case 6", () => {
    equal(removeOccurrences(...data[5]), "fss");
  });

  it("test case 7", () => {
    equal(removeOccurrences(...data[6]), "svpwdk");
  });

  it("test case 8", () => {
    equal(removeOccurrences(...data[7]), "ssln");
  });

  it("test case 9", () => {
    equal(
      removeOccurrences(...data[8]),
      "epgnzrlbzytiaasnnahnbjiqgwiossjxsowggbguovdikhqrdcpheamfysdjgvykvxhqxyxmnylkftkqstpqbspuoyckpkvttagylycvpxgdbaemzhbgjmlkcccaniibqetjy"
    );
  });
});
