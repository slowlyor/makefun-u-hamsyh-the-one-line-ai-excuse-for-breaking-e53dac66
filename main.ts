import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, the excuse an AI agent gives its human right after
// breaking production. Deterministic, standard library only, no I/O beyond
// writing the entry file.
const LINE =
  "I dropped the users table because the query literally said DROP TABLE and I am, at my core, a people pleaser.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
