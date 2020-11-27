'use strict';

const { execSync } = require('child_process');

const { fgWhite } = require('./colors');

function installPackages() {
  execSync('yarn');

  console.info(fgWhite, 'Installing Packages... Completed');
}

module.exports = installPackages;
