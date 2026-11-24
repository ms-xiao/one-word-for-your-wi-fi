// One Word for Your Wi-Fi — make.fun entry.
// The word below is the whole entry: the funniest, truest single word for
// a home network that vanishes mid-sentence and comes back like nothing
// happened. The grader runs this file (Node 22); it prints the word and
// writes the same bytes to /output/entry.txt for the gate scorer.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Ghosting";

// Gate from the brief: entry.txt must be UTF-8 text of 1 to 20 characters,
// not only whitespace. "Ghosting" is 8. Refuse here instead of shipping a
// word the sealed scorer would reject.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error("word fails the 1-20 character gate");
}

// The gate counts characters, so the output holds exactly the word: no
// trailing newline, no extra whitespace. Normalise defensively in case
// the word above is ever edited to include one.
const TEXT = WORD.replace(/\n$/, "");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
process.stdout.write(TEXT);
