const fs = require('fs');

const raw = fs.readFileSync('/src/sociologyRAG.ts', 'utf8');

// A quick and dirty way to find the keys since the file is exporting a constant
// Let's use a simpler approach: evaluating it.
// We need to compile TS to JS, or just use ts-node.
