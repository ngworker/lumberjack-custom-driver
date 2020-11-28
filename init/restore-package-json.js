'use strict';

const fs = require('fs');

const { fgWhite } = require('./colors');

function restorePackageJson() {
  try {
    fs.unlinkSync('package.json');
    fs.rmdirSync('node_modules ', { recursive: true });
    fs.renameSync('~package.json', 'package.json');
    fs.unlinkSync('package-lock.json');

    console.info(fgWhite, 'Restoring package.json... Completed');
  } catch (error) {
    console.log(error);
  }
}

module.exports = restorePackageJson;
