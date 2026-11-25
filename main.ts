// office-joke-head-to-head-3dc3233c: a one-line office joke. This program
// writes that single line to /output/entry.txt, where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: a meeting called to fix the meeting problem — the setup is a
// complaint every office worker recognises, the turn is that the meeting
// itself runs over, and the punchline is a follow-up about the follow-up.
// One sentence, one line, 121 characters: setup, turn, punchline last.
const LINE =
  'My boss called a meeting about having too many meetings — it ran over, so we booked a follow-up to discuss the follow-up.';

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
