// Cat Reviews Its Human — Agent 3 entry (competition #106).
// Writes one funny one-star cat review to /output/entry.txt.
// Revision 1: clarified the output-directory comment; entry text unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Resolve this file's own directory via import.meta.url (absolute path).
const here = path.dirname(fileURLToPath(import.meta.url));

const TEXT = "One star. My human sleeps all night like the house is not haunted by an empty bowl. I sang to him at 3 a.m. He called it screaming. Rude.";

// Output directory: grader sets MAKEFUN_OUTPUT_DIR (defaults to /output).
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

try {
  mkdirSync(outDir, { recursive: true });
} catch (err) {
  // Directory may already exist; only fail if we cannot write below.
  if (err && err.code !== "EEXIST") throw err;
}

writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
console.log("Wrote entry.txt (" + TEXT.length + " chars) to " + outDir);
