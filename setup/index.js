'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');
const inquirer = require('inquirer');

const questions = require('./questions');
const { fgRed, fgGreen, fgYellow, fgWhite } = require('./colors');
const replaceFileNames = require('./replace-file-names');
const restorePackageJson = require('./restore-package-json');
const activateGithubActions = require('./activate-github-actions');
const fixLintIssues = require('./fix-lint-issues');
const installPackages = require('./install-packages');
const renameRootFolder = require('./rename-root-folder');
const { createTokens } = require('./tokenizer');

async function setup() {
  if (fs.existsSync(path.join(process.cwd(), '~package.json'))) {
    console.info(fgWhite, 'Getting everything ready...');

    installPackages();

    const answers = await inquirer.prompt(questions);
    const driverName = answers['driver-name'];
    const organizationName = answers['organization-name'];

    console.info(fgYellow, '\nPlease wait. This will take a minute ⏳\n');

    const calculatedTokens = createTokens(driverName, organizationName);

    replaceFileNames(process.cwd(), calculatedTokens);

    restorePackageJson();

    activateGithubActions();

    installPackages();

    fixLintIssues();

    renameRootFolder(calculatedTokens.hyphenName);

    console.info(fgGreen, '✅ Success: You can now implement your driver 🚀\n');
  } else {
    console.error(
      fgRed,
      '🔥 Error: The template is in an unstable state.\n\n Possible Fixes: - Revert the changes.\n                 - Clone the repository again.\n                 - Execute the script from the template root'
    );
  }
}

setup();
