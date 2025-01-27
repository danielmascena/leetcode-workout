import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import checkIfPrerequisite from "src/solutions/1462.course-schedule-iv";
import data from "src/mocks/1462.mock";

describe("[1462] Course Schedule IV", () => {
  it("test case 1", () => {
    deepEqual(checkIfPrerequisite(...data[0]), [false, true]);
  });

  it("test case 2", () => {
    deepEqual(checkIfPrerequisite(...data[1]), [false, false]);
  });

  it("test case 3", () => {
    deepEqual(checkIfPrerequisite(...data[2]), [true, true]);
  });

  it("test case 4", () => {
    deepEqual(checkIfPrerequisite(...data[3]), [false, true]);
  });

  it("test case 5", () => {
    deepEqual(checkIfPrerequisite(...data[4]), [true, false, true, false]);
  });

  it("test case 6", () => {
    deepEqual(checkIfPrerequisite(...data[5]), [
      true,
      true,
      true,
      false,
      false,
      false,
    ]);
  });

  it("test case 7", () => {
    deepEqual(checkIfPrerequisite(...data[6]), [
      false,
      true,
      false,
      true,
      false,
      false,
      false,
    ]);
  });

  it("test case 8", () => {
    deepEqual(checkIfPrerequisite(...data[7]), [
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      true,
      false,
      true,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      false,
    ]);
  });
});
