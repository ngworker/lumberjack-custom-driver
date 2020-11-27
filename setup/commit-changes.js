'use strict';

const { execSync } = require('child_process');

const { fgWhite } = require('./colors');

function commitChanges() {
  execSync('git add . && git commit -m "chore: 🤖 setup completed"');

  console.info(fgWhite, 'Committing changes... Completed');
}

module.exports = commitChanges;
