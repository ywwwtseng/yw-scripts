const execa = require('execa');
const fs = require('fs-extra');
const path = require('path');
const output = require('../../utils/output');

module.exports = function(options) {
  const installSpinner = output.wait('Installing styled-components modules and build some files...');
  execa('npm', ['install', '--save', '--save-exact', 'styled-components', 'styled-normalize', 'styled-system'])
    .then(() => {
      return fs.copy(
        path.resolve(__dirname, './template'),
        path.resolve(options.currentPath),
      );
    })
    .then(() => {
      installSpinner.stop();
    })
    .catch(() => {
      installSpinner.stop();
    });
}