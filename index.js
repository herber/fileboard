const clipboardy = require('clipboardy');
const fs = require('fs');

const red = text => `\x1b[31m${text}\x1b[0m`;
const green = text => `\x1b[32m${text}\x1b[0m`;

module.exports = file => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.error(red('×'), `Could not read file`);
      process.exit(1);
    }

    clipboardy
      .write(data.toString())
      .then(() => {
        console.log(green('√'), `Copied!`);
      })
      .catch(() => {
        console.error(red('×'), `Could not copy to clipboard`);
      });
  });
};
