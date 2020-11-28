'use strict';

const fs = require('fs');

const { fgWhite } = require('./colors');

function activateGithubActions() {
  console.info(fgWhite, 'Github Actions activation...');

  if (fs.existsSync('github')) {
    if (fs.existsSync('.github')) {
      fs.rmdirSync('.github', { recursive: true });
    }
    fs.renameSync('github', '.github');
  }

  console.info(fgWhite, 'Github Actions activation... Completed');
}

module.exports = activateGithubActions;
