'use strict';

const process = require('process');
const path = require('path');
const fs = require('fs');

const { fgWhite } = require('./colors');

function renameRootFolder(hyphenName) {
  console.info(fgWhite, 'Renaming root folder...\n');

  const splittedPath = process.cwd().split('/');
  splittedPath[splittedPath.length - 1] = hyphenName;
  const newPath = path.normalize(splittedPath.join('/'));

  fs.renameSync(process.cwd(), newPath);

  console.info(fgWhite, 'Renaming root folder... Completed\n');
}

module.exports = renameRootFolder;
