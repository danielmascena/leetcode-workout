import { readdir, mkdir, copyFile } from "node:fs/promises";
import { join } from "node:path";

const copyDirectory = async (source, destination) => {
  try {
    await mkdir(destination, { recursive: true });

    const entries = await readdir(source, { withFileTypes: true });

    for (const ent of entries) {
      if (!ent.name.startsWith('.')) {
        const srcPath = join(source, ent.name);
        const destPath = join(destination, ent.name);

        if (ent.isDirectory()) {
          await copyDirectory(srcPath, destPath);
        } else {
          await copyFile(srcPath, destPath);
        }
      }
    }
    console.log(`Content copied from ${source} to ${destination}`);
  } catch (err) {
    console.log(`Error while copying files to ${destination}: ${err.message}`);
  }
};

copyDirectory(".", "/Users/dmascena/Workspace/gh-projects/leetcode-worktout/");
