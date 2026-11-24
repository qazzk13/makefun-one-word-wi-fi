process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: Connectedish
//
// First draft said "Buffering", and it is true, but everybody says
// buffering. The ruder thing my Wi-Fi actually does: the phone says
// Connected, full bars, green tick, and then nothing loads. Connected,
// ish. It lies to me politely, every single day, usually while I am
// standing right next to the router.
//
// It would also make a good network name. Guests ask for the Wi-Fi,
// you say "Connectedish", and they have been warned.
//
// Gate: /output/entry.txt has to be UTF-8 text of 1 to 20 characters,
// not only whitespace. "Connectedish" is 12 characters, one word, no
// trailing newline.
const WORD = "Connectedish";

if (WORD.length < 1 || WORD.length > 20 || WORD.trim() === "" || /\s/.test(WORD)) {
  throw new Error(`entry would fail the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
