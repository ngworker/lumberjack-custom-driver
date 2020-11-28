'use strict';

const { execSync } = require('child_process');

const { fgWhite } = require('./colors');

function installPackages() {
  console.info(fgWhite, 'Installing Packages...');

  execSync('yarn');

  console.info(fgWhite, 'Installing Packages... Completed');
}

module.exports = installPackages;
