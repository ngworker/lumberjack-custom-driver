const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const fgGreen = '\x1b[32m';
const fgYellow = '\x1b[33m';
const fgWhite = '\x1b[37m';

const driverName = process.argv.slice(2)[0] || 'lumberjack-custom-driver';

const filesToIgnore = {
  '.git': 'true',
  '.DS_Store': 'true',
  '.gitignore': 'true',
  '.editorconfig': 'true',
  'AUTHOR_SETUP.js': 'true',
  'logo.svg': 'true',
  node_modules: 'true',
  'prettier.config.js': 'true',
  dist: 'true',
};

const capitalizedToken = '<name-capitalize>';
const hyphenToken = '<name-hyphen>';
const hyphenFileToken = '{name-hyphen}';
const capitalizedUnitedToken = '<name-capitalize-united>';
const lowercaseToken = '<name-lowercase>';
const cammelToken = '<name-cammel>';
const uppercaseUnderscoreToken = '<name-uppercase-underscore>';

const splittedName = driverName.split('-');
const capitalizedName = splittedName.map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
const hyphenName = driverName;
const capitalizedUnitedName = splittedName.map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join('');
const lowercaseName = splittedName.map((name) => name.toLowerCase()).join(' ');
const cammelName = splittedName
  .map((name, index) => (index != 0 ? name.charAt(0).toUpperCase() + name.slice(1) : name))
  .join('');
const uppercaseUnderscoreName = splittedName.map((name) => name.toUpperCase()).join('_');

function swapFileNames(dir) {
  _swapFileNames(dir);

  console.info(fgWhite, 'Path driver names swap... Completed');
  console.info(fgWhite, 'Content driver names swap... Completed');
}
function _swapFileNames(dir) {
  try {
    fs.readdirSync(dir).forEach(function (file) {
      let filePath = path.normalize(path.join(dir, file));
      filePath = renameFilenamePlaceholder(filePath);
      if (!filesToIgnore[file]) {
        const isDir = fs.lstatSync(filePath).isDirectory();
        if (isDir) {
          _swapFileNames(filePath);
        } else {
          replaceNameOccurrences(filePath);
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Replace placeholders with driver name in file content
 *
 * @param {string} fileContent
 *
 */
function replaceNameOccurrences(filePath) {
  const fileContent = fs.readFileSync(filePath).toString('utf8');

  let modifiedContent = fileContent;
  modifiedContent = modifiedContent.replace(new RegExp(capitalizedToken, 'g'), capitalizedName);
  modifiedContent = modifiedContent.replace(new RegExp(hyphenToken, 'g'), hyphenName);
  modifiedContent = modifiedContent.replace(new RegExp(capitalizedUnitedToken, 'g'), capitalizedUnitedName);
  modifiedContent = modifiedContent.replace(new RegExp(lowercaseToken, 'g'), lowercaseName);
  modifiedContent = modifiedContent.replace(new RegExp(cammelToken, 'g'), cammelName);
  modifiedContent = modifiedContent.replace(new RegExp(uppercaseUnderscoreToken, 'g'), uppercaseUnderscoreName);

  fs.writeFileSync(filePath, modifiedContent);
}

/**
 * Rename filename with placeholder using driver's name
 *
 * @param {string} filePath
 * @returns
 */
function renameFilenamePlaceholder(filePath) {
  if (filePath.includes(hyphenFileToken)) {
    const newPath = filePath.replace(new RegExp(hyphenFileToken, 'g'), hyphenName);

    fs.rmdirSync(newPath, { recursive: true });
    fs.renameSync(filePath, newPath);
    return newPath;
  }
  return filePath;
}

function updatePackageJson() {
  try {
    const rawData = fs.readFileSync('package.json');
    let packageJson = JSON.parse(rawData.toString('utf8'));
    packageJson = {
      ...packageJson,
      'lint-staged': {
        '*.{js,json,css,scss,ts,html,component.html}': ['prettier --write', 'git add'],
      },
      husky: {
        hooks: {
          'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
          'pre-commit': 'yarn hooks:pre-commit && lint-staged && yarn lint',
          'pre-push': 'yarn test:lib:ci',
        },
      },
    };

    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

    console.info(fgWhite, 'package.json update... Completed');
  } catch (error) {
    console.log(error);
  }
}

function activateGithubActions() {
  if (fs.existsSync('github')) {
    fs.rmdirSync('.github', { recursive: true });
    fs.renameSync('github', '.github');
  }

  console.info(fgWhite, 'Github Actions activation... Completed');
}

function fixLintIssues() {
  execSync('yarn lint --fix');

  console.info(fgWhite, 'Fix linting issue... Completed');
}

function renameRootFolder() {
  const splittedPath = __dirname.split('/');
  splittedPath[splittedPath.length - 1] = hyphenName;
  const newPath = path.normalize(splittedPath.join('/'));

  fs.renameSync(__dirname, newPath);

  console.info(fgWhite, 'Rename root folder... Completed\n');
}

console.info(fgYellow, '\nPlease wait. This will take a minute ⏳\n');

swapFileNames(__dirname);

updatePackageJson();

activateGithubActions();

fixLintIssues();

renameRootFolder();

console.info(fgGreen, '✅ Success: You can now implement your driver 🚀\n');
