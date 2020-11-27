'use strict';

const { execSync } = require('child_process');

const { fgWhite } = require('./colors');

function fixLintIssues() {
  execSync('yarn lint --fix');

  console.info(fgWhite, 'Fixing linting issue... Completed');
}

module.exports = fixLintIssues;
