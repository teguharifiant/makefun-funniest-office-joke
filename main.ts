// The Funniest Office Joke, Judged Head to Head
// u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// One original one-line joke about office life. The program writes the joke
// as the whole entry to /output/entry.txt (or the directory given by
// OUTPUT_DIR), validating the competition gate: UTF-8 text, 1 to 200
// characters, not only white space.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "IT fixed the printer by unplugging it, which is also how HR handles difficult employees.";

function main(): void {
  const text = JOKE;
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
