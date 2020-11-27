'use strict';

const { execSync } = require('child_process');

const { fgWhite } = require('./colors');

function installPackages() {
  execSync('yarn');

  console.info(fgWhite, 'Install Packages... Completed');
}

module.exports = installPackages;
