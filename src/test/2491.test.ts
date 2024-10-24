import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import dividePlayers from "src/solutions/2491.divide-players-into-teams-of-equal-skill";
import data from "../mocks/2491.mock";

describe("2491.Divide Players Into Teams of Equal Skill", () => {
    it("test case 1", () => {
        strictEqual(dividePlayers(data[0]), 22);
    });

    it("test case 2", () => {
        strictEqual(dividePlayers(data[1]), 12);
    });

    it("test case 3", () => {
        strictEqual(dividePlayers(data[2]), -1);
    });

    it("test case 85", () => {
        strictEqual(dividePlayers(data[3]), 16915588750);
    });
});