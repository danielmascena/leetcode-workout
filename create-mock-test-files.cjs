// #!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

// get the prefix from the command line arguments
const prefix = process.argv[2];

if (!prefix) {
    console.error("Please provide a prefix as argument");
    process.exit(1);
}
// define file paths
const mockFilePath = path.join("./src/mocks", `${prefix}.mock.ts`);
const testFilePath = path.join("./src/test", `${prefix}.test.ts`);

// create directories if they don't exist
const createDirectoryIfNotExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true});
    }
};

createDirectoryIfNotExists(path.dirname(mockFilePath));
createDirectoryIfNotExists(path.dirname(testFilePath));

// define the content for the mock and test files
const mockFileContent = "export default [];\n";
const testFileContent = `import { describe, it } from "node:test";
import {strictEqual } from "node:assert";

describe("${prefix}.", () => {
    it("test case 1", () => {});
});
`;

// write content to the mock file
fs.writeFile(mockFilePath, mockFileContent, err => {
    if (err) console.error(`Error creating mock file ${err}`);
    else console.log(`Mock file created: ${mockFilePath}`);
});

// write content to the test file
fs.writeFile(testFilePath, testFileContent, err => {
    if (err) console.error(`Error creating test file ${err}`);
    else console.log(`Test file create: ${testFilePath}`);
});
