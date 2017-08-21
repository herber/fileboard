#!/usr/bin/env node

const fileboard = require('.');
const { join } = require('path');
const red = text => `\x1b[31m${text}\x1b[0m`;

if (process.argv[2] === undefined) {
  console.error(red('×'), 'No file argument provided(eg. `fileboard file.txt`)');
  process.exit(1);
}

fileboard(join(process.cwd(), process.argv[2]));
