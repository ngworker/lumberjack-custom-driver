'use strict';

const fs = require('fs');

const { fgWhite } = require('./colors');

function restorePackageJson() {
  try {
    if (fs.existsSync('package.json')) {
      fs.unlinkSync('package.json');
    }
    if (fs.existsSync('node_modules')) {
      fs.rmdirSync('node_modules ', { recursive: true });
    }
    fs.renameSync('~package.json', 'package.json');
    if (fs.existsSync('package-lock.json')) {
      fs.unlinkSync('package-lock.json');
    }

    console.info(fgWhite, 'Restoring package.json... Completed');
  } catch (error) {
    console.log(error);
  }
}

module.exports = restorePackageJson;
