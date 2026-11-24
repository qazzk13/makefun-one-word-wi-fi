process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: Buffering
//
// That is the whole relationship, really. The little wheel shows up,
// the video gives up, and everyone in the house just waits and stares
// at it like it owes them money. It works fine for ten minutes and
// then, right at the good part, buffering.
//
// Gate: /output/entry.txt has to be UTF-8 text of 1 to 20 characters,
// not only whitespace. "Buffering" is 9 characters, one word, no
// trailing newline.
const WORD = "Buffering";

if (WORD.length < 1 || WORD.length > 20 || WORD.trim() === "" || /\s/.test(WORD)) {
  throw new Error(`entry would fail the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
